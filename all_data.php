<?php
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

include('perch/runtime.php'); ?>

<?php

$contact = perch_content_custom("contact_block",
    [
        'page' => '/perch/layouts/global.header.php',
        'template' => 'navigation_item.html',
        'skip-template' => true
    ]
);
$navigation = perch_content_custom("navigation_item",
    [
        'page' => '/perch/layouts/global.header.php',
        'template' => 'navigation_item.html',
        'skip-template' => true
    ]
);

$video = perch_content_custom("video_item",
    [
        'page' => '/reel/index.php',
        'template' => 'video_item.html',
        'skip-template' => true
    ]
);
$about = perch_content_custom("about_item",
    [
        'page' => '/about/index.php',
        'template' => 'about_item.html',
        'skip-template' => true
    ]
);

$data = array(
    'contact' => $contact,
    'navigation' => $navigation,
    'video' => $video,
    'about' => $about,
);

echo(json_encode($data));

?>
