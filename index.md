---
layout: home
top_image: "/uploads/23-04-21-lloyds-london-coal-protest-joao-daniel-pereira-dsf7919.jpg"
jump:
  text: Find out more
  target: Latest imprisonment
top_quote: Exists to support activists in prison in the UK.
end_quote: RIPS is an independent organisation set up by individuals from Extinction
  Rebellion, Burning Pink & other independent groups.
title: ''
image: "/uploads/22-04-21-hsbc-broken-windows_gareth-morris-3-small.jpg"
blocks:
- template: wide-block
  text: |-
    # Latest imprisonment

    {% assign rebels = site.rebels %}
    {% include rebel-list.html rebels=rebels limit=3 %}
  button-select: Custom
  button:
  - template: button
    label: See all prisoners
    link: "/rebels"
- template: half-image-block
  half_image: "/uploads/22-04-21-hsbc-broken-windows_gareth-morris-58.jpg"
  text: |-
    # Donate

    Please consider donating some to help us support these brave people. Find out more about [how we spend the money](/donate).

    Donations can be made to the [Rebels in Prison Support fundraiser](https://www.crowdfunder.co.uk/p/rebelsinprisonsupport-1). You can also donate to the Rebels in Prison Support bank account:

    Account Name: Alice Reid

    Sort Code: 08-90-66

    Account Number: 09462487

    Please consider making a recurring monthly donation if you can. It will help us plan our activities effectively.
  button-select: ''
  button: []
- template: half-image-block
  half_image: "/uploads/22-04-21-hsbc-broken-windows_gareth-morris-3-small.jpg"
  text: |-
    # About

    For necessary action on the climate emergency we need to take urgent, radical, direct action. As the government continues to fight us, more and more people will be held on remand - in prison - before they get a trial. Rebels in Prison Support exists to support activists wanting to take that next step of action.
  button-select: Custom
  button:
  - template: button
    label: Find out more
    link: "/about"
- template: half-map-block
  text: |-
    # Prisons

    The prisons people have been held in across the UK. Click on the markers to see who is there now.
  button:
  - template: button
    label: Big Map
    link: "/prisons"
  button-select: Custom
- template: half-image-block
  half_image: "/uploads/22-04-21-hsbc-broken-windows_gareth-morris-50.jpg"
  text: |-
    # Contact us

    {% include contact-form.html expand=false %}
  button-select: ''
  button: []

---
