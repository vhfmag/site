<div class="experience">
    <div class="flexrow">
        <div class="logo_column">
            <a class="image thumbnail" href="{{ include.experience.link }}">
                <img src="{{ include.experience.image | relative_url }}" alt=""/>
            </a>
        </div>
        <div class="content">
            <h2>{{ include.experience.company }}</h2>
            {% if include.experience.role %}
                <h3>{{ include.experience.role | newline_to_br }}</h3>
            {% endif %}
            <small>{{ include.experience.period }}</small>
            {% if include.experience.description %}
                <p>{{ include.experience.description | newline_to_br }}</p>
            {% endif %}
            {% if include.experience.tasks %}
                <h4>{{ site.data.strings.resume.responsibleFor }}</h4>
                <ul class="fit">
                    {% for task in include.experience.tasks %}
                        <li>{{ task }}</li>
                    {% endfor %}
                </ul>
            {% endif %}
        </div>
    </div>
</div>