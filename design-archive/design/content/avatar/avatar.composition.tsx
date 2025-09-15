import React from 'react';

import { Avatar } from './avatar.js';

export const BasicAvatarWithImage = () => {
  return (
    <MemoryRouter>
      <Avatar
        src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
        name="Philip Gizzie"
        size={64}
      />
  <Avatar name="John Doe" />

export const AvatarWithInitials = () => {
  return (
    <MemoryRouter>
      <Avatar src={undefined} name="Jane Doe" size={64} />
    </MemoryRouter>
  );
};

export const AvatarsWithDifferentStatuses = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        src="https://images.unsplash.com/photo-1635404617144-8e262a622e41?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
        name="Online User"
        status="online"
        size={56}
      />
      <Avatar
        src="https://images.unsplash.com/photo-1635828833991-e0bd3bf753af?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
        name="Away User"
        status="away"
        size={56}
      />
      <Avatar
        src="https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw0fHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
        name="Busy User"
        status="busy"
        size={56}
      />
      <Avatar
        src="https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
        name="Offline User"
        status="offline"
        size={56}
      />
    </div>
  );
};

export const AvatarsWithDifferentSizes = () => {
  return (
    <MemoryRouter>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Avatar
          src="https://images.unsplash.com/photo-1645731504293-ad4d5da42a10?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw2fHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
          name="Small Avatar"
          size={32}
          status="online"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1611001476049-a59a2736d410?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
          name="Medium Avatar"
          size={48}
          status="online"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1583829315216-06c78572eace?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw4fHxkZXZlbG9wZXIlMjBwcm9maWxlfGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDg3fDA&ixlib=rb-4.1.0"
          name="Large Avatar"
          size={64}
          status="online"
        />
        <Avatar
          src={undefined}
          name="XL"
          size={96}
          status="online"
        />
      </div>
    </MemoryRouter>
  );
};