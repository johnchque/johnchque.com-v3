// remark-video-embed.mjs
import { visit } from 'unist-util-visit';

const VIDEO_PATTERNS = {
  youtube: {
    regex: /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
    embed: (id) => `https://www.youtube.com/embed/${id}`,
    thumbnail: (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  },
  vimeo: {
    regex: /vimeo\.com\/(\d+)/,
    embed: (id) => `https://player.vimeo.com/video/${id}`,
    thumbnail: (id) => `https://vumbnail.com/${id}.jpg`,
  },
};

function getVideoInfo(url) {
  for (const [platform, config] of Object.entries(VIDEO_PATTERNS)) {
    const match = url.match(config.regex);
    if (match) {
      return { 
        platform, 
        id: match[1], 
        embedUrl: config.embed(match[1]),
        thumbnail: config.thumbnail(match[1]),
        originalUrl: url,
      };
    }
  }
  return null;
}

export function remarkVideoEmbed(options = {}) {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      // Only process paragraphs with a single link
      if (node.children.length !== 1 || node.children[0].type !== 'link') {
        return;
      }

      const link = node.children[0];
      const videoInfo = getVideoInfo(link.url);

      if (!videoInfo) {
        return;
      }

      // Create lite embed with thumbnail and play button
      const embedNode = {
        type: 'html',
        value: `<div class="video-embed" data-video-id="${videoInfo.id}" data-video-platform="${videoInfo.platform}">
  <div class="video-embed-preview" data-embed-url="${videoInfo.embedUrl}">
    <img src="${videoInfo.thumbnail}" alt="Video thumbnail" loading="lazy" class="video-embed-thumbnail" />
    <button class="video-embed-play" aria-label="Play video">
      <svg viewBox="0 0 68 48" width="68" height="48">
        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
        <path d="M 45,24 27,14 27,34" fill="#fff"></path>
      </svg>
    </button>
  </div>
</div>`,
      };

      parent.children[index] = embedNode;
    });
  };
}
