const mapping: Record<string, string> = {
  fields: 'field',
  forms: 'form',
  organizations: 'organization',
  responses: 'response',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
