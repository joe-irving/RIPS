source "https://rubygems.org"

# ruby '~> 2.7.1'
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.0"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"
gem "jekyll-rebellion"
# gem "espeak-ruby", require: "espeak"
gem "nokogiri"
gem "css_parser"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.9"
  gem 'jekyll-linkpreview'
  gem 'jekyll-twitter-plugin'
  gem "jekyll-youtube"
  gem "jekyll-sitemap"
  gem "jekyll-liquify"
  gem "jekyll-leaflet"
  gem "jekyll-get-json"
  gem "jekyll-airtable-import", git: "https://github.com/tippingpointuk/jekyll-airtable-import/", branch: "rube-3.2.2"
  # gem "jekyll-airtable-import", path: "/home/joe/Documents/Work/TippingPointUK/Tools/Plugins/jekyll-airtable-import"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
