// Replace all newlines and multiple spaces with a single space

export const homePageProjectCoverImageSize = `(max-width: 389px) calc(100vw - 20px * 2),
  (min-width: 390px) and (max-width: 767px) calc(100vw - 40px * 2),
  (min-width: 768px) and (max-width: 1023px) calc((100vw - 20px - 40px * 2) / 2),
  (min-width: 1024px) and (max-width: 1279px) calc((100vw - 40px - 40px * 2) / 2),
  (min-width: 1280px) and (max-width: 1679px) calc((100vw - 40px - 100px * 2) / 2),
  (min-width: 1680px) calc((100vw - 40px - 140px * 2) / 2)`.replace(/\s\s+/g, ' ');

export const homePageTeamMemberPhotoSize = `(max-width: 389px) calc((100vw - 20px * 2) * 0.8),
  (min-width: 390px) and (max-width: 575px) calc((100vw - 40px * 2) * 0.8),
  (min-width: 576px) and (max-width: 767px) calc((100vw - 40px * 2) * 0.75),
  (min-width: 768px) and (max-width: 768px) calc((100vw - 20px - 40px * 2) / 2),
  (min-width: 1024px) and (max-width: 1279px) calc((100vw - 40px - 40px * 2) / 2),
  (min-width: 1280px) and (max-width: 1679px) calc((70vw - 40px - 100px * 2) / 2),
  (min-width: 1680px) calc((70vw - 40px - 140px * 2) / 2)`.replace(/\s\s+/g, ' ');

export const aboutPageTeamMemberPhotoSize = `(max-width: 389px) calc(100vw - 20px * 2),
  (min-width: 390px) and (max-width: 767px) calc(100vw - 40px * 2), 
  (min-width: 768px) and (max-width: 1279px) calc((100vw - 40px - 40px * 2) / 2),
  (min-width: 1280px) 600px`.replace(/\s\s+/g, ' ');

export const blogPagePostCoverImageSize = `(max-width: 389px) calc(100vw - 20px * 2),
  (min-width: 390px) and (max-width: 767px) calc(100vw - 40px * 2),
  (min-width: 768px) and (max-width: 1023px) calc((100vw - 20px - 40px * 2) / 2),
  (min-width: 1024px) and (max-width: 1279px) calc((100vw - 40px - 40px * 2) / 2),
  (min-width: 1280px) and (max-width: 1679px) calc((100vw - 40px * 3 - 100px * 2) / 4),
  (min-width: 1680px) calc((100vw - 30px * 3 - 140px * 2) / 4)`.replace(/\s\s+/g, ' ');

export const blogPostPageCoverImageSize = `(max-width: 389px) calc(100vw - 20px * 2),
  (min-width: 390px) and (max-width: 1079px) calc(100vw - 40px * 2),
  (min-width: 1080px) and (max-width: 1279px) 1000px,
  (min-width: 1280px) 100vw`.replace(/\s\s+/g, ' ');

export const fullWidthImageSize = `(max-width: 389px) calc(100vw - 20px * 2),
  (min-width: 390px) and (max-width: 1279px) calc(100vw - 40px * 2),
  (min-width: 1280px) and (max-width: 1679px) calc(100vw - 100px * 2),
  (min-width: 1680px) calc(100vw - 140px * 2)`.replace(/\s\s+/g, ' ');

export const projectsPageProjectCoverImageSize = `(max-width: 389px) calc(100vw - 20px * 2),
  (min-width: 390px) and (max-width: 767px) calc(100vw - 40px * 2),
  (min-width: 768px) and (max-width: 1023px) calc((100vw - 40px - 40px * 2) / 2),
  (min-width: 1024px) and (max-width: 1279px) calc((100vw - 40px - 40px * 2) / 2),
  (min-width: 1280px) and (max-width: 1679px) calc((100vw - 40px - 100px * 2) / 2),
  (min-width: 1680px) calc((100vw - 80px - 140px * 2) / 2)`.replace(/\s\s+/g, ' ');
