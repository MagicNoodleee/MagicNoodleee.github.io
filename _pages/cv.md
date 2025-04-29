---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<!-- 可以用类似的方式放一个pdf上去
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
-->

{% include base_path %}

Research Interest
======
*	Quantum Reliability Theory and its Application to Quantum Devices
* Complex System and Nonlinear Dynamics
* Machine Learning and Reservoir Computing

Education
======
* Ph.D in Beijing Computational Science Research Center, China, 2025 (expected)
* B.S. in Jilin University, Jilin, China, 2020

Work experience
======
* Exchange student: Aug - Dec 2019
  * Georgia Institute of Technology, Atlanta, GA, USA

* Bloch chain research internship: Jul - Sep 2018
  * Hong Kong Applied Science and Technology Research Institute, Hong Kong, China

<!--   
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3 -->

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul> -->
  
<!-- Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->
  
<!-- Service and leadership
======
* Currently signed in to 43 different slack teams -->
