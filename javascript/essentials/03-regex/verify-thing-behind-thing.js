var s = 'background-image:url(https://img1.wsimg.com/Sitecore/4/3/2/%7B43217359-0AC5-43F2-942F-ACB7123F0A6A%7Dpro_wp-hosting-marquee_usen_01_v01.jpg);';
var reg = /https:\/\/.+?img[.]com\/Sitecore.+/;
var result = reg.test(s);
console.log(result);  // true
