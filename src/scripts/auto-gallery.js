// src/scripts/auto-gallery.js
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

function initAutoGallery() {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const images = mainContent.querySelectorAll('img');
    if (images.length === 0) return;

    // Wrap images in links
    images.forEach((img) => {
        if (img.parentElement.tagName === 'A') return;

        // Get high-res version from ImageKit
        const fullSrc = img.src.includes('imagekit.io')
            ? img.src.replace('w-1200', 'w-2400')
            : img.src;

        const link = document.createElement('a');
        link.href = fullSrc;
        link.setAttribute('data-pswp-width', img.naturalWidth);
        link.setAttribute('data-pswp-height', img.naturalHeight);

        if (img.alt) {
            link.setAttribute('data-pswp-caption', img.alt);
        }

        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
    });

    // Initialize PhotoSwipe
    const lightbox = new PhotoSwipeLightbox({
        gallery: 'main',
        children: 'a[href*="imagekit.io"]',
        pswpModule: () => import('photoswipe'),

        // Good defaults
        preload: [1, 2],
        zoom: true,
        pinchToClose: true,
        closeOnVerticalDrag: true,
        maxZoomLevel: 2,

        // Responsive padding
        paddingFn: (viewportSize) => ({
            top: 40,
            bottom: 40,
            left: viewportSize.x < 768 ? 10 : 70,
            right: viewportSize.x < 768 ? 10 : 70,
        }),
    });

    lightbox.init();
}

document.addEventListener('DOMContentLoaded', initAutoGallery);
document.addEventListener('astro:after-swap', initAutoGallery);