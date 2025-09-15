import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Dropdown } from './dropdown.js';

// Styles for composition elements to ensure they are visually appealing
const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '250px',
  fontFamily: 'var(--typography-font-family)',
  color: 'var(--colors-text-primary)',
  background: 'var(--colors-surface-background)',
};

const placeholderButtonStyle: React.CSSProperties = {
  background: 'var(--colors-primary-default)',
  color: 'var(--colors-text-inverse)',
  border: 'none',
  borderRadius: 'var(--borders-radius-medium)',
  padding: 'var(--spacing-small) var(--spacing-default)',
  cursor: 'var(--interactions-cursor-pointer)',
  fontSize: 'var(--typography-sizes-body-default)',
  fontWeight: 'var(--typography-font-weight-medium)',
  transition: 'background-color var(--interactions-transitions-duration-fast)',
};

const placeholderImageStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 'var(--borders-radius-circle)',
  objectFit: 'cover',
  display: 'block',
  border: '2px solid var(--colors-surface-primary)',
  boxShadow: 'var(--effects-shadows-small)',
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-small)',
};

const listItemStyle: React.CSSProperties = {
  padding: 'var(--spacing-small)',
  cursor: 'pointer',
  borderRadius: 'var(--borders-radius-small)',
  transition: 'background-color var(--interactions-transitions-duration-fast)',
};

const complexContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-small)',
};

const complexContentHeaderStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 'var(--typography-sizes-body-large)',
  fontWeight: 'var(--typography-font-weight-bold)',
  color: 'var(--colors-text-primary)',
};

const complexContentPStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 'var(--typography-sizes-body-default)',
  color: 'var(--colors-text-secondary)',
  maxWidth: '250px',
};

/**
 * A simple dropdown with text-based options.
 */
export const BasicDropdown = () => {
  return (
    <PhilipGizzieTheme>
      <div style={containerStyle}>
        <Dropdown placeholder={<button style={placeholderButtonStyle}>Options</button>}>
          <ul style={listStyle}>
            <li style={listItemStyle} className="hover-item">Profile</li>
            <li style={listItemStyle} className="hover-item">Settings</li>
            <li style={listItemStyle} className="hover-item">Logout</li>
          </ul>
        </Dropdown>
      </div>
      <style>{`.hover-item:hover { background-color: var(--colors-surface-secondary); }`}</style>
    </PhilipGizzieTheme>
  );
};

/**
 * A dropdown aligned to the right, often used for user profile menus.
 */
export const RightAlignedDropdown = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ ...containerStyle, justifyContent: 'flex-end', paddingRight: '20px' }}>
        <Dropdown
          openPosition="bottom-right"
          placeholder={
            <img
              src="https://images.unsplash.com/photo-1631237535186-d6dce7730e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwzfHxpbnRlcmFjdGl2ZSUyMFVJJTIwY29tcG9uZW50fGVufDF8Mnx8Ymx1ZXwxNzU3ODQ3NDkwfDA&ixlib=rb-4.1.0&q=80&w=200"
              alt="User"
              style={placeholderImageStyle}
            />
          }
        >
          <ul style={listStyle}>
            <li style={listItemStyle} className="hover-item">View Account</li>
            <li style={listItemStyle} className="hover-item">Help Center</li>
            <li style={{...listItemStyle, borderTop: '1px solid var(--borders-default-color)', marginTop: 'var(--spacing-small)', paddingTop: 'var(--spacing-default)'}} className="hover-item">
              Sign Out
            </li>
          </ul>
        </Dropdown>
      </div>
      <style>{`.hover-item:hover { background-color: var(--colors-surface-secondary); }`}</style>
    </PhilipGizzieTheme>
  );
};

/**
 * A dropdown that contains more than just a list, showing its flexibility.
 */
export const DropdownWithComplexContent = () => {
  return (
    <PhilipGizzieTheme>
      <div style={containerStyle}>
        <Dropdown placeholder={<button style={placeholderButtonStyle}>Notifications</button>}>
          <div style={complexContentStyle}>
            <h4 style={complexContentHeaderStyle}>New Update Available</h4>
            <p style={complexContentPStyle}>
              A new version is ready. Update now to get the latest features and security improvements.
            </p>
            <button style={{...placeholderButtonStyle, marginTop: 'var(--spacing-small)'}}>
              Update Now
            </button>
          </div>
        </Dropdown>
      </div>
    </PhilipGizzieTheme>
  );
};