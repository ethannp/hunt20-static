## Static mirror of hunt20

This was created using [HTTrack](https://www.httrack.com/). After the hunt ended, I changed `urls.py` so urlpatterns included the `robots.txt` path. Additionally,
I allowed all sites to be crawled by changing one line robots.txt to be crawled by changing one line in `views.py` to `response.write('User-agent: *\nAllow: /\n')`.

I am **not** a web developer, but if you need help with static site conversion or other aspects of gph-site, feel free to contact me at hunt20info@gmail.com. There's
no guarantee I can answer your questions though - the folks who run [gph-site](https://github.com/galacticpuzzlehunt/gph-site) will likely be much more helpful.