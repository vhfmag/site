---
title: Currículo
layout: landing
description: 'Desenvolvedor full-stack de Salvador, especializado em web apps feitos com React'
image: assets/images/code_editor.jpg
nav-menu: true
---

<div id="main">
    <section id="one">
        <div class="inner">
            <header class="major">
                <h1>Competências</h1>
            </header>
            <h2>O que eu posso fazer por você</h2>
            <div class="row">
                {% for competence in site.data.competences %}
                    <div class="4u 12u$(small)">
                        <h3>{{ competence.name }}</h3>
                        <p>{{ competence.description }}</p>
                    </div>
                {% endfor %}
            </div>
            <h2>Habilidades e Interesses</h2>
            <div class="row">
                <div class="8u 12u$(small)">
                    <h3>Habilidades técnicas</h3>
                    {% include custom/skill_list.md skills=site.data.skills.technical columns=2 %}
                </div>
                <div class="4u 12u$(small)">
                    <h3>Soft skills</h3>
                    {% include custom/skill_list.md skills=site.data.skills.soft columns=1 %}
                </div>
            </div>
            <h3>Interesses</h3>
            <div>
                {% include custom/skill_list.md skills=site.data.interests.subjects columns=3 %}
            </div>
        </div>
    </section>
    <section id="two">
        <div class="inner">
            <header class="major">
                <h1>Experiências profissionais</h1>
            </header>
            {% for experience in site.data.experiences.work %}
                {% include custom/experience.md experience=experience %}
            {% endfor %}
        </div>
    </section>
</div>