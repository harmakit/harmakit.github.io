// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const hiddenCommands = ['banner'];
  const commandsToShow = Object.keys(bin).filter((command) => !hiddenCommands.includes(command)).sort();
  let c = '';
  for (let i = 1; i <= commandsToShow.length; i++) {
    if (i % 7 === 0) {
      c += commandsToShow[i - 1] + '\n';
    } else {
      c += commandsToShow[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'info' to display summary.
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
█░█ ▄▀█ █▀█ █▀▄▀█ ▄▀█ █▄▀ █ ▀█▀
█▀█ █▀█ █▀▄ █░▀░█ █▀█ █░█ █ ░█░

Type 'help' to see the list of available commands.
Type 'info' to display summary.
Type 'readme' to display my github readme.
`;
};
