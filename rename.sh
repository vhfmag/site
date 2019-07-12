for file in src/**/*.mdx; do
    mv ${file} ${file%.mdx}.md
done
