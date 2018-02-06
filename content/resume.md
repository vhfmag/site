---
title: "Currículo"
menu: "main"
draft: true
---

<div id="main">
    <section id="one">
        <div class="inner">
            <header class="major">
                <h1>{{ site.data.strings.resume.competences }}</h1>
            </header>
            <h2>{{ site.data.strings.resume.whatCanIDo }}</h2>
            <div class="row">
                {% for competence in site.data.competences %}
                    <div class="4u 12u$(small)">
                        <h3>{{ competence.name }}</h3>
                        <p>{{ competence.description }}</p>
                    </div>
                {% endfor %}
            </div>
            <h2>{{ site.data.strings.resume.skillsAndInterests }}</h2>
            <div class="row">
                <div class="8u 12u$(small)">
                    <h3>{{ site.data.strings.resume.technicalSkills }}</h3>
                    {% include custom/skill_list.md skills=site.data.skills.technical columns=2 %}
                </div>
                <div class="4u 12u$(small)">
                    <h3>{{ site.data.strings.resume.softSkills }}</h3>
                    {% include custom/skill_list.md skills=site.data.skills.soft columns=1 %}
                </div>
            </div>
            <h3>{{ site.data.strings.resume.interests }}</h3>
            <div>
                {% include custom/skill_list.md skills=site.data.interests.subjects columns=3 %}
            </div>
        </div>
    </section>
    <section id="two">
        <div class="inner">
            <header class="major">
                <h1>{{ site.data.strings.resume.professionalExperiences }}</h1>
            </header>
            {% for experience in site.data.experiences.work %}
                {% include custom/experience.md experience=experience %}
            {% endfor %}
        </div>
    </section>
</div>