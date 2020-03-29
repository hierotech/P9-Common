import * as ReactDOM from 'react-dom';

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let bucketUrl = null;
let defaultAssetPlaceholder = null;
let defaultAvatar = null;

let canvas = null;

function _createGcsUrl(entityType, entityId, type, fileName) {
  if (!bucketUrl) {
    throw new Error('bucketUrl is not initialized');
  }

  return `${bucketUrl}/${entityType}/${entityId}/${type}/${fileName}`;
}

export function createAssetLogoUrl(asset) {
  return _createGcsUrl('assets', asset.ticker, 'logo', asset.file_name_logo);
}

export function createAssetPlaceholderUrl(asset) {
  if (!defaultAssetPlaceholder) {
    throw new Error('defaultAssetPlaceholder is not initialized');
  }

  const fileName = asset.file_name_placeholder;

  if (!fileName) {
    return defaultAssetPlaceholder;
  }

  return _createGcsUrl('assets', asset.ticker, 'placeholder', asset.file_name_placeholder);
}

export function createUserAvatarUrl(personalData) {
  if (!defaultAvatar) {
    throw new Error('defaultAvatar is not initialized');
  }

  const fileName = personalData.file_name_avatar;

  if (!fileName) {
    return defaultAvatar;
  }

  return _createGcsUrl('users', personalData.user_id, 'avatar', fileName);
}

export function createWindow(url, open = false) {
  const newWindow = window.open(url);

  if (open && newWindow) {
    newWindow.focus();
  }
}

export function copyTextToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.opacity = '0';
  textarea.innerText = text;

  const parentElement = document.getElementsByTagName('body')[0];
  parentElement.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  parentElement.removeChild(textarea);
}

export function findElement(target, element) {
  let el = target;

  while (el) {
    if (el === element) {
      return true;
    }

    el = el.parentNode;
  }

  return false;
}

export function formatDate(timestamp, {mode = 'datetime'} = {}) {
  const d = new Date(timestamp);

  const date = d.toLocaleDateString('en', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  if (mode === 'date') {
    return date;
  }

  const time = d.toLocaleTimeString('en', {
    hour: 'numeric',
    minute: '2-digit'
  });

  return `${date}, ${time}`;
}

export function formatTimerTime(secs) {
  const days = Math.floor(secs / DAY);
  secs %= DAY;

  const hours = Math.floor(secs / HOUR);
  secs %= HOUR;

  const minutes = Math.floor(secs / MINUTE);
  secs %= MINUTE;

  return [days, hours, minutes, secs]
    .map(part => part.toString().padStart(2, '0'))
    .join(':');
}

export function getTextWidth(text, font) {
  if (!canvas) {
    canvas = document.createElement('canvas');
  }

  const context = canvas.getContext('2d');

  context.font = font;

  return context.measureText(text).width;
}

export function getWindowSize() {
  return {
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  };
}

export function init(params) {
  bucketUrl = params.bucketUrl;
  defaultAssetPlaceholder = params.defaultAssetPlaceholder;
  defaultAvatar = params.defaultAvatar;
}

export function isExternalUrl(href) {
  return /^(https?:)?\/\//.test(href);
}

export function measureElement(element) {
  const node = ReactDOM.findDOMNode(element);

  return {
    width: node.offsetWidth,
    height: node.offsetHeight
  };
}
