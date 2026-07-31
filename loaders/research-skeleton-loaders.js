export const researchSkeletonLoaders = [
  {
    id: 'media-card-skeleton',
    name: 'Media Card Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A card placeholder that preserves the final image, title, metadata, and action proportions while content loads.',
    markup: `<div class="vl-media-card-skeleton" aria-hidden="true">
  <span class="vl-media-card-image"></span>
  <span class="vl-media-card-title"></span>
  <span class="vl-media-card-meta"></span>
  <span class="vl-media-card-line"></span>
  <span class="vl-media-card-action"></span>
</div>`,
    css: `.vl-media-card-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
}
.vl-media-card-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 6px;
  background: #e7ecf3;
}
.vl-media-card-image { height: 92px; border-radius: 10px !important; }
.vl-media-card-title { width: 78%; height: 13px; }
.vl-media-card-meta { width: 45%; height: 8px; }
.vl-media-card-line { width: 100%; height: 8px; }
.vl-media-card-action { width: 38%; height: 27px; margin-top: 2px; border-radius: 8px !important; }
.vl-media-card-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-media-card-wave calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-media-card-wave { to { transform: translateX(110%); } }`
  },
  {
    id: 'avatar-paragraph-skeleton',
    name: 'Avatar Paragraph Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'An avatar, heading, metadata, and paragraph skeleton for customer, supplier, profile, and activity summaries.',
    markup: `<div class="vl-avatar-paragraph-skeleton" aria-hidden="true">
  <span class="vl-avatar-paragraph-avatar"></span>
  <div>
    <span class="vl-avatar-paragraph-name"></span>
    <span class="vl-avatar-paragraph-meta"></span>
    <span class="vl-avatar-paragraph-line"></span>
    <span class="vl-avatar-paragraph-line medium"></span>
    <span class="vl-avatar-paragraph-line short"></span>
  </div>
</div>`,
    css: `.vl-avatar-paragraph-skeleton {
  width: min(240px, 84vw);
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: start;
  gap: 12px;
}
.vl-avatar-paragraph-skeleton > div { display: grid; gap: 7px; }
.vl-avatar-paragraph-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-avatar-paragraph-avatar { width: 48px; height: 48px; border-radius: 50% !important; }
.vl-avatar-paragraph-name { width: 70%; height: 12px; }
.vl-avatar-paragraph-meta { width: 42%; height: 8px; margin-bottom: 2px; }
.vl-avatar-paragraph-line { width: 100%; height: 8px; }
.vl-avatar-paragraph-line.medium { width: 84%; }
.vl-avatar-paragraph-line.short { width: 58%; }
.vl-avatar-paragraph-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-avatar-paragraph-wave calc(var(--loader-speed) * 1.48) ease-in-out infinite;
}
@keyframes vl-avatar-paragraph-wave { to { transform: translateX(110%); } }`
  },
  {
    id: 'comment-thread-skeleton',
    name: 'Comment Thread Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A stacked discussion placeholder for notes, comments, approvals, audit trails, and activity streams.',
    markup: `<div class="vl-comment-thread-skeleton" aria-hidden="true">
  <div><span class="avatar"></span><p><span class="name"></span><span class="line"></span><span class="line short"></span></p></div>
  <div><span class="avatar"></span><p><span class="name"></span><span class="line"></span><span class="line medium"></span></p></div>
</div>`,
    css: `.vl-comment-thread-skeleton {
  width: min(240px, 84vw);
  display: grid;
  gap: 13px;
}
.vl-comment-thread-skeleton > div {
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: start;
  gap: 9px;
}
.vl-comment-thread-skeleton p { display: grid; gap: 6px; margin: 0; }
.vl-comment-thread-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-comment-thread-skeleton .avatar { width: 34px; height: 34px; border-radius: 50%; }
.vl-comment-thread-skeleton .name { width: 48%; height: 9px; }
.vl-comment-thread-skeleton .line { width: 100%; height: 8px; }
.vl-comment-thread-skeleton .line.short { width: 62%; }
.vl-comment-thread-skeleton .line.medium { width: 78%; }
.vl-comment-thread-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-comment-thread-wave calc(var(--loader-speed) * 1.52) ease-in-out infinite;
}
@keyframes vl-comment-thread-wave { to { transform: translateX(110%); } }`
  },
  {
    id: 'feed-item-skeleton',
    name: 'Feed Item Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A repeatable feed item placeholder for infinite lists, news, transactions, notifications, and timeline cards.',
    markup: `<div class="vl-feed-item-skeleton" aria-hidden="true">
  <article><span class="avatar"></span><div><span class="title"></span><span class="meta"></span><span class="line"></span><span class="line short"></span></div></article>
  <article><span class="avatar"></span><div><span class="title"></span><span class="meta"></span><span class="line"></span><span class="line short"></span></div></article>
</div>`,
    css: `.vl-feed-item-skeleton {
  width: min(240px, 84vw);
  display: grid;
  gap: 10px;
}
.vl-feed-item-skeleton article {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  padding: 10px;
  border: 1px solid #e1e7ef;
  border-radius: 9px;
  background: #fff;
}
.vl-feed-item-skeleton article > div { display: grid; gap: 6px; }
.vl-feed-item-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-feed-item-skeleton .avatar { width: 38px; height: 38px; border-radius: 50%; }
.vl-feed-item-skeleton .title { width: 72%; height: 10px; }
.vl-feed-item-skeleton .meta { width: 42%; height: 7px; }
.vl-feed-item-skeleton .line { width: 100%; height: 8px; }
.vl-feed-item-skeleton .line.short { width: 68%; }
.vl-feed-item-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-feed-item-wave calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-feed-item-wave { to { transform: translateX(110%); } }`
  },
  {
    id: 'image-placeholder-skeleton',
    name: 'Image Placeholder Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A neutral image-first placeholder for product photos, document previews, charts, attachments, and gallery tiles.',
    markup: `<div class="vl-image-placeholder-skeleton" aria-hidden="true">
  <span class="vl-image-placeholder-media"><i></i></span>
  <span class="vl-image-placeholder-caption"></span>
  <span class="vl-image-placeholder-detail"></span>
</div>`,
    css: `.vl-image-placeholder-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
}
.vl-image-placeholder-skeleton > span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 6px;
  background: #e7ecf3;
}
.vl-image-placeholder-media {
  height: 122px;
  display: grid !important;
  place-items: center;
  border-radius: 10px !important;
}
.vl-image-placeholder-media i {
  width: 34px;
  height: 27px;
  border: 2px solid #c5ceda;
  border-radius: 6px;
}
.vl-image-placeholder-media i::before {
  content: '';
  display: block;
  width: 7px;
  height: 7px;
  margin: 5px;
  border-radius: 50%;
  background: #c5ceda;
}
.vl-image-placeholder-caption { width: 76%; height: 11px; }
.vl-image-placeholder-detail { width: 48%; height: 8px; }
.vl-image-placeholder-skeleton > span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-image-placeholder-wave calc(var(--loader-speed) * 1.55) ease-in-out infinite;
}
@keyframes vl-image-placeholder-wave { to { transform: translateX(110%); } }`
  }
];
