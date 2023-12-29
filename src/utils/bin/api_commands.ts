// // List of commands that require API calls

import { getProjects } from '../api';
import { getReadme } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();

  const projectsText = projects
    .filter(repo => repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map(
      (repo) =>
`${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url} \uf005 ${repo.stargazers_count}</a>`,
    )
    .join('\n');

  return `Here are some of my projects on github:\n\n${projectsText}`;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n\n${readme}`;
};