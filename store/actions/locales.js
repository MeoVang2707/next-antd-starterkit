export const CHANGE_LANGUAGE = 'locales/CHANGE_LANGUAGE';

export function changeLanguage(data) {
  return { type: CHANGE_LANGUAGE, data };
}
