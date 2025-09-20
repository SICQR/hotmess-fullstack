-- HOTMESS Backend Database Schema
-- PostgreSQL compatible schema for radio shows, podcasts, blog posts, and related entities

-- DJs/Hosts table
CREATE TABLE djs (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    stage_name VARCHAR(255) NOT NULL,
    real_name VARCHAR(255),
    pronouns VARCHAR(50),
    bio_short TEXT, -- 40-60 words
    bio_long TEXT, -- 110-160 words
    profile_image_url VARCHAR(500),
    social_links JSONB, -- {twitter, instagram, etc.}
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Radio Shows table
CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    host_id INTEGER REFERENCES djs(id),
    schedule VARCHAR(255), -- e.g. "Monday-Friday 8:00-10:00 AM"
    one_liner VARCHAR(120) NOT NULL, -- ≤120 chars
    short_blurb TEXT NOT NULL, -- 40-60 words
    long_blurb TEXT NOT NULL, -- 110-160 words
    tags TEXT[], -- array of keywords
    ctas TEXT[], -- array of call-to-actions
    image_url VARCHAR(500),
    live_room_url VARCHAR(500),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Podcast Series table
CREATE TABLE podcast_series (
    id SERIAL PRIMARY KEY,
    series_slug VARCHAR(100) UNIQUE NOT NULL,
    series_title VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    description TEXT,
    keywords TEXT[],
    cover_url VARCHAR(500),
    host_id INTEGER REFERENCES djs(id),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Podcast Episodes table
CREATE TABLE podcast_episodes (
    id SERIAL PRIMARY KEY,
    series_id INTEGER REFERENCES podcast_series(id) ON DELETE CASCADE,
    ep_number INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    one_liner VARCHAR(120), -- ≤120 chars
    description TEXT,
    audio_url VARCHAR(500),
    duration_s INTEGER, -- duration in seconds
    tags TEXT[],
    published_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(series_id, ep_number)
);

-- Blog Authors table
CREATE TABLE blog_authors (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    pronouns VARCHAR(50),
    avatar_url VARCHAR(500),
    social_links JSONB,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog Posts table
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(500),
    type VARCHAR(50) NOT NULL, -- feature, update, guide, recap, release
    author_id INTEGER REFERENCES blog_authors(id),
    cover_url VARCHAR(500),
    summary TEXT,
    body_md TEXT NOT NULL, -- markdown content
    tags TEXT[],
    published_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
    -- AI-generated fields
    ai_summary TEXT,
    ai_excerpt TEXT,
    ai_keywords TEXT[],
    ai_translations JSONB, -- {es: "title", fr: "title", etc.}
    -- SEO and metadata
    meta_title VARCHAR(255),
    meta_description TEXT,
    og_image_url VARCHAR(500),
    canonical_url VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Show Episodes/Broadcasts table (for individual show instances)
CREATE TABLE show_episodes (
    id SERIAL PRIMARY KEY,
    show_id INTEGER REFERENCES shows(id) ON DELETE CASCADE,
    title VARCHAR(255),
    description TEXT,
    air_date TIMESTAMP WITH TIME ZONE,
    duration_s INTEGER,
    archive_url VARCHAR(500), -- link to archived broadcast
    playlist JSONB, -- array of tracks played
    guest_info JSONB, -- guest information if applicable
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comments table (for blog posts, could extend to other content)
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES blog_posts(id) ON DELETE CASCADE,
    parent_id INTEGER REFERENCES comments(id), -- for threaded comments
    author_name VARCHAR(255),
    author_email VARCHAR(255),
    content TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, spam, deleted
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tags table (normalized approach for better querying)
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    color VARCHAR(7), -- hex color code
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Content Tags junction table
CREATE TABLE content_tags (
    id SERIAL PRIMARY KEY,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    content_type VARCHAR(50) NOT NULL, -- 'show', 'podcast_episode', 'blog_post'
    content_id INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tag_id, content_type, content_id)
);

-- Analytics table for tracking engagement
CREATE TABLE content_analytics (
    id SERIAL PRIMARY KEY,
    content_type VARCHAR(50) NOT NULL,
    content_id INTEGER NOT NULL,
    metric_type VARCHAR(50) NOT NULL, -- views, plays, shares, etc.
    metric_value INTEGER DEFAULT 1,
    session_id VARCHAR(255),
    user_id INTEGER, -- if user is logged in
    ip_address INET,
    user_agent TEXT,
    referrer VARCHAR(500),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_blog_posts_status_published ON blog_posts(status, published_at DESC);
CREATE INDEX idx_blog_posts_type ON blog_posts(type);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_podcast_episodes_series ON podcast_episodes(series_id, ep_number DESC);
CREATE INDEX idx_podcast_episodes_status ON podcast_episodes(status, published_at DESC);
CREATE INDEX idx_shows_active ON shows(active);
CREATE INDEX idx_djs_active ON djs(active);
CREATE INDEX idx_content_tags_lookup ON content_tags(content_type, content_id);
CREATE INDEX idx_content_analytics_lookup ON content_analytics(content_type, content_id, timestamp);

-- Updated at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to relevant tables
CREATE TRIGGER update_djs_updated_at BEFORE UPDATE ON djs 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_shows_updated_at BEFORE UPDATE ON shows 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_podcast_series_updated_at BEFORE UPDATE ON podcast_series 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_podcast_episodes_updated_at BEFORE UPDATE ON podcast_episodes 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_authors_updated_at BEFORE UPDATE ON blog_authors 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_show_episodes_updated_at BEFORE UPDATE ON show_episodes 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Sample data insertion
INSERT INTO blog_authors (slug, name, bio, pronouns) VALUES
('hotmess-editorial', 'HOTMESS Editorial', 'The collective voice of HOTMESS', 'they/them'),
('alex-rivera', 'Alex Rivera', 'Community organizer and consent culture educator', 'they/them'),
('sam-chen', 'Sam Chen', 'Writer, chosen family enthusiast, and professional mess', 'she/her'),
('hotmess-tech-team', 'HOTMESS Tech Team', 'The code wizards behind the magic', 'they/them');

INSERT INTO djs (slug, stage_name, bio_short, bio_long) VALUES
('dj-chaos', 'DJ CHAOS', 'Morning chaos agent who makes productivity look like the scam it is', 'DJ CHAOS brings unhinged queer energy to your mornings with hot takes, sex-positive affirmations, and music that makes you want to dance in your underwear. They believe mornings should be messy, pleasure is revolutionary, and your straight friends need to do better.'),
('dj-daddy', 'DJ DADDY', 'The ultimate daddy experience with care, authority, and wisdom', 'DJ DADDY creates space where vulnerability meets power exchange in the most healing way. With lived experience and deep understanding of dynamics, they offer advice that comes from the heart and music that makes you feel held and seen.'),
('dj-care', 'DJ CARE', 'Aftercare specialist and radical self-care advocate', 'DJ CARE guides listeners through emotional aftercare that actually works. They create containers for emotional safety where people can process, heal, and prepare for whatever comes next. Care isn''t selfish—it''s revolutionary.'),
('dj-sunshine', 'DJ SUNSHINE', 'Friday night energy transformer and vibe curator', 'DJ SUNSHINE curates the perfect progression from chill to chaos, featuring tracks that make you remember why you love your body and life. They celebrate queer nightlife and remind us that fun is a form of resistance.'),
('dj-night', 'DJ NIGHT', 'Saturday night euphoria dealer and underground scene connector', 'DJ NIGHT delivers four hours of pure dancefloor euphoria every Saturday, featuring rotating guest DJs from the queer underground scene. They build and release tension like the best kind of edging through rhythm and bass.'),
('dj-whisper', 'DJ WHISPER', 'Vulnerability guide and midnight sanctuary keeper', 'DJ WHISPER creates intimate late-night spaces where vulnerability becomes strength and secrets find safe harbor. They hold space for the emotions that visit us after midnight with gentle music and healing conversations.');

-- Add sample data referencing the JSON files
-- (In a real implementation, you'd migrate the JSON data to these tables)