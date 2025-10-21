// src/plugins/remark-imagekit.mjs
import { visit } from 'unist-util-visit';

export function remarkImageKit() {
    const imageKitUrl = 'https://ik.imagekit.io/johnchque';

    return (tree) => {
        visit(tree, 'image', (node) => {
            // Only transform local images
            if (!node.url.startsWith('http')) {
                node.url = `${imageKitUrl}/tr:f-auto,q-80,w-1200/${node.url}`;

                node.data = node.data || {};
                node.data.hProperties = { loading: 'lazy', class: 'w-100' };
            }
        });
    };
}
