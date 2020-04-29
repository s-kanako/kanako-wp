


<?php get_header(); ?>




<div class="news-post">
    <!-- タイトル -->
    <h2 class="news__title"><?php the_title(); ?></h2>
    <div class="news-detail">
        <!-- 日付 -->
        <time class="news__time"><?php the_time('Y年m月d日'); ?></time>
        <!-- カテゴリー -->
        <div class="single-category"><?php $cat = get_the_category(); $cat = $cat[0]; { echo $cat->cat_name; } ?></div>
    </div>
    <?php the_post_thumbnail('post-thumbnail', array('class' => 'singleimg', 'alt' => the_title_attribute('echo=0'))); ?>
    <?php if (have_posts()) : the_post(); ?>
        <?php the_content(); ?>
    <?php endif; ?>

</div> <!-- news post -->






<?php get_footer(); ?>