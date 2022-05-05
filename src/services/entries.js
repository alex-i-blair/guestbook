import { client, parseData } from './client';

export async function getEntries() {
  const response = await client
    .from('entries')
    .select()
    .order('created_at', { ascending: false });
  return parseData(response);
}

export async function createEntry({ userId, content }) {
  const response = await client
    .from('entries')
    .insert({ guest_id: userId, content });
  return parseData(response);
}

export async function updateEntryById(id, content) {
  const response = await client
    .from('entries')
    .update({ content })
    .match({ id });
  return parseData(response);
}

export async function deleteEntryById(id) {
  const response = await client.from('entries').delete().match({ id });
  return parseData(response);
}
