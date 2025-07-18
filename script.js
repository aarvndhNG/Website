document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const images = [
        'images/a_looping_pixel_art_waterfall_cascading_from_floating_islands_with_tiny_trees_glowing_crystals_and_p__1a1525c4.png',
        'images/a_looping_pixel_art_waterfall_cascading_from_floating_islands_with_tiny_trees_glowing_crystals_and_p__03665f5f.png',
        'images/treasure_chest_with_coins_popping_out_pixel_sparkles_around_style_make_it_blend_with_the_front_cliff__eb42bfd5.png',
        'images/score_9_score_8_up_score_7_up_score_6_up_score_5_up_score_4_up_1_w1ngs_1girl_25_years_old_curvy_ange__390d297e.png'
    ];

    images.forEach(src => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        const img = document.createElement('img');
        img.src = src;
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
});
