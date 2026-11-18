import {mkdir,writeFile} from 'node:fs/promises';
import {example} from '../src/example.mjs';
import {build} from '../src/audit.mjs';
import {projectJSON,receiptJSON,scheduleCSV,reviewHTML,summarySVG,calendar} from '../src/exports.mjs';
const p=example(),r=build(p);await mkdir('examples',{recursive:true});
for(const [name,value] of [['observatory-project.json',projectJSON(p)],['observatory-receipt.json',receiptJSON(r)],['observatory-schedule.csv',scheduleCSV(r).text],['observatory-review.html',reviewHTML(r)],['observatory-summary.svg',summarySVG(r)],['observatory-plan.ics',calendar(r,new Date('2030-01-01T00:00:00Z'))]])await writeFile('examples/'+name,value);
console.log('Generated six actual exports: '+JSON.stringify(r.stats));
