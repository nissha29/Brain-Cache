import { v4 as uuidv4 } from 'uuid';

export default function generateUniqueId(prefix: string) {
    const uniqueId = uuidv4().replace(/-/g, '');
    return `${prefix}-${uniqueId.slice(0,15)}`;   
}

