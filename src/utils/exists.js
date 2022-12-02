import { access } from 'fs/promises';

export const exists = async (path) => {
    try {
        await access(path);

        return true;
    } catch {
        return false;
    }
}
