require 'jekyll'

module InstaParse
  class Generator < Jekyll::Generator
    priority :low
    def generate(site)
      insta_data = site.data["insta"]
      new_insta_data = []
      insta_data.each do |item|
        item_new = item
        lines = item["caption"].split("\n")[1..]
        excerpt = ''
        lines.each do |line|
          if line.length > 5
            excerpt = line
            break
          end
        end
        title = item["caption"].split("\n")[0].split(":")[0].split(".")[0]
        content = item["caption"].gsub("\n","\n\n")
        new_fields = Hash[
          'data' => Hash[
            'title' => title,
            'excerpt' => excerpt,
            'date' => item["timestamp"],
            'insta_url' => item["permalink"],
            'categories' => ["Instagram"],
            'authors' => ["#{site.config["title"]} Instagram"],
            'slug' => Jekyll::Utils.slugify(title[0..20]),
            'layout' => 'insta',
            'content' => content
          ],
          'content' => item["caption"]
          ]
        item_new.merge!(new_fields['data'])
        item_new.delete('permalink')
        insta_post = Jekyll::Document.new(File.join("_posts","#{new_fields["slug"]}.md"), {:site=>site,:collection=>site.posts})
        insta_post.merge_data!(item_new)
        insta_post.content = content
        site.posts.docs << insta_post
        # new_insta_data.append(item_new)
      end
      # site.data["insta"] = new_insta_data
    end
  end
end
