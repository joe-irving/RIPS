module Jekyll
  module AssetFilter
    def google_img(input)
      if input.include? "google.com"
        id = /[-\w]{25,}/.match(input)
        "https://drive.google.com/uc?export=view&id=#{id}"
      else
        input
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
