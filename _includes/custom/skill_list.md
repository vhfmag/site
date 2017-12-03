<ul class="row actions fit">
    {% assign sorted_skills = include.skills | sort:"name" | reverse | sort:"intensity" | reverse %}
    {% for skill in sorted_skills %}
        {% include custom/skill.md name=skill.name columns=include.columns %}
    {% endfor %}
</ul>