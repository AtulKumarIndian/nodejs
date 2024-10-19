import { getHeapStatistics } from 'v8';

const totalHeapSize = getHeapStatistics().total_heap_size;
const totalHeapLimit = getHeapStatistics().heap_size_limit;

console.log(`Total heap size: ${(totalHeapSize / 1024  / 1024).toFixed(2)} MB`)

console.log(`Total heap size: ${(totalHeapLimit / 1024  / 1024).toFixed(2)} MB`)