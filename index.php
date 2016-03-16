<?php

$_SERVER['REQUEST_URI'] != '/' ? handleRedirect() : require("app/view.html");

function handleRedirect() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://apis.anewhope.io/urlshortener/v1/url");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('id' => "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]")));
    curl_setopt($ch, CURLOPT_HEADER, false);

    $res = curl_exec($ch);
    curl_close($ch);
    
    $json = json_decode($res, true);
    $target = $json['longUrl'];
    header('Location:' . $target);
}