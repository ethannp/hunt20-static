# Hunt20
This site was originally a live Django app, created with [gph-site](https://github.com/galacticpuzzlehunt/gph-site). The original repository is kept private due to it containing private information.

## Static mirror of hunt20

This static version was created using [HTTrack](https://www.httrack.com/). After the hunt ended, I changed `urls.py` so urlpatterns included the `robots.txt` path. Additionally,
I allowed all sites to be crawled by changing one line in the robots.txt request in `views.py` to `response.write('User-agent: *\nAllow: /\n')`.

To connect a custom domain, see [this article](https://hossainkhan.medium.com/using-custom-domain-for-github-pages-86b303d3918a) (I used Google Domains).

I am **not** a web developer, but if you need help with static site conversion or other aspects of gph-site, feel free to contact me at hunt20info@gmail.com. There's
no guarantee I can answer your questions though - the folks who run [gph-site](https://github.com/galacticpuzzlehunt/gph-site) will likely be much more helpful.
