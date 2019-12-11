// https://github.com/angular/in-memory-web-api/blob/master/src/app/hero-in-mem-data.service.ts
// https://github.com/angular/in-memory-web-api/blob/master/src/app/hero-in-mem-data-override.service.ts

import { Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

// tslint:disable:no-unused-variable
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
// tslint:enable:no-unused-variable

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo) {

    /* tslint:disable */
  
    const contacts = [
      
      {
        "id":"1",
        "displayName":"Abetz, Senator the Hon Eric",
        "title":"Senator the Hon",
        "givenName":"Eric",
        "middleName":"",
        "familyName":"Abetz",
        "honorific":"",
        "salutation":"Senator",
        "preferredName":"Eric",
        "initials":"E.",
        "gender":"MALE",
        "email":"eric.abetz@aph.gov.au",
        "phoneNumber":"",
        "photoUrl":"",

        "organisation":{
          "id":"",
          "name":"Liberal Party",
          "phoneNumber":"(03) 6224 3707"
        },
  
        "address":{
          "id":"1",
          "line1":"Highbury House",
          "line2":"136 Davey Street",
          "city":"Hobart",
          "state":"TAS",
          "postalCode":"7001"
        }

      },
      {
        "id":"2",
        "displayName":"Anning, Senator Fraser",
        "title":"Senator",
        "givenName":"Fraser",
        "middleName":"",
        "familyName":"Anning",
        "honorific":"",
        "salutation":"Senator",
        "preferredName":"Fraser",
        "initials":"F.",
        "gender":"MALE",
        "email":"fraser.anning@aph.gov.au",
        "phoneNumber":"",
        "photoUrl":"",
 
        "organisation":{
          "id":"",
          "name":"Katter's Australian Party",
          "phoneNumber":"(07) 3221 9099"
        },
        
        "address":{
          "id":"2",
          "line1":"Suite 2, Level 36, Waterfront Place",
          "line2":"1 Eagle Street",
          "city":"Brisbane",
          "state":"QLD",
          "postalCode":"5067"
        }
        
      },
      {
        "id": "3",
        "displayName": "Bernardi, Senator Cory",
        "title": "Senator",
        "givenName": "Cory",
        "middleName": "",
        "familyName": "Bernardi",
        "honorific": "",
        "salutation": "Senator",
        "preferredName": "Cory",
        "initials": "C.",
        "gender": "MALE",
        "email": "cory.bernardi@aph.gov.au",
        "phoneNumber": "",
        "photoUrl": "",
    
        "organisation": {
          "id": "3",
          "name": "Australian Conservatives",
          "phoneNumber": "(08) 8362 8600"
        }
        
      },
      
      {"id":"4","displayName":"Bilyk, Senator Catryna","title":"Senator","givenName":"Catryna","middleName":"","familyName":"Bilyk","honorific":"","salutation":"Senator","preferredName":"Catryna","initials":"C. L.","gender":"FEMALE","email":"catryna.bilyk@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 6229 4444"}},
      {"id":"5","displayName":"Birmingham, Senator the Hon Simon","title":"Senator the Hon","givenName":"Simon","middleName":"","familyName":"Birmingham","honorific":"","salutation":"Senator","preferredName":"Simon","initials":"S. J.","gender":"MALE","email":"simon.birmingham@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 8354 1644"}},
      {"id":"6","displayName":"Brockman, Senator Slade","title":"Senator","givenName":"Slade","middleName":"","familyName":"Brockman","honorific":"","salutation":"Senator","preferredName":"Slade","initials":"S.","gender":"MALE","email":"slade.brockman@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 9414 7288"}},
      {"id":"7","displayName":"Brown, Senator Carol","title":"Senator","givenName":"Carol","middleName":"","familyName":"Brown","honorific":"","salutation":"Senator","preferredName":"Carol","initials":"C. L.","gender":"FEMALE","email":"carol.brown@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 6231 0099"}},
      {"id":"8","displayName":"Burston, Senator Brian","title":"Senator","givenName":"Brian","middleName":"","familyName":"Burston","honorific":"","salutation":"Senator","preferredName":"Brian","initials":"B.","gender":"MALE","email":"brian.burston@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"United Australia Party","phoneNumber":"(02) 4959 1044"}},
      {"id":"9","displayName":"Bushby, Senator David","title":"Senator","givenName":"David","middleName":"","familyName":"Bushby","honorific":"","salutation":"Senator","preferredName":"David","initials":"D. C","gender":"MALE","email":"david.bushby@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(03) 6331 8501"}},
      {"id":"10","displayName":"Cameron, Senator the Hon Douglas","title":"Senator the Hon","givenName":"Douglas","middleName":"","familyName":"Cameron","honorific":"","salutation":"Senator","preferredName":"Doug","initials":"D. N.","gender":"MALE","email":"douglas.cameron@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(02) 4751 4288"}},
      {"id":"11","displayName":"Canavan, Senator the Hon Matthew","title":"Senator the Hon","givenName":"Matthew","middleName":"","familyName":"Canavan","honorific":"","salutation":"Senator","preferredName":"Matthew","initials":"M.J.","gender":"MALE","email":"matthew.canavan@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"National Party","phoneNumber":"(07) 4927 2003"}},
      {"id":"12","displayName":"Carr, Senator the Hon Kim","title":"Senator the Hon","givenName":"Kim","middleName":"","familyName":"Carr","honorific":"","salutation":"Senator","preferredName":"Kim","initials":"K. J.","gender":"MALE","email":"kim.carr@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 9639 2798"}},
      {"id":"13","displayName":"Cash, Senator the Hon Michaelia","title":"Senator the Hon","givenName":"Michaelia","middleName":"","familyName":"Cash","honorific":"","salutation":"Senator","preferredName":"Michaelia","initials":"M.C.","gender":"FEMALE","email":"michaelia.cash@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 9226 2000"}},
      {"id":"14","displayName":"Chisholm, Senator Anthony","title":"Senator","givenName":"Anthony","middleName":"","familyName":"Chisholm","honorific":"","salutation":"Senator","preferredName":"Anthony","initials":"A.","gender":"MALE","email":"anthony.chisholm@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(07) 3229 4477"}},
      {"id":"15","displayName":"Colbeck, Senator the Hon Richard","title":"Senator the Hon","givenName":"Richard","middleName":"","familyName":"Colbeck","honorific":"","salutation":"Senator","preferredName":"Richard","initials":"R.M.","gender":"MALE","email":"richard.colbeck@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(03) 6424 5960"}},
      {"id":"16","displayName":"Collins, Senator the Hon Jacinta","title":"Senator the Hon","givenName":"Jacinta","middleName":"","familyName":"Collins","honorific":"","salutation":"Senator","preferredName":"Jacinta","initials":"J. M. A.","gender":"FEMALE","email":"jacinta.collins@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 9890 7022"}},
      {"id":"17","displayName":"Cormann, Senator the Hon Mathias","title":"Senator the Hon","givenName":"Mathias","middleName":"","familyName":"Cormann","honorific":"","salutation":"Senator","preferredName":"Mathias","initials":"M.H.P.","gender":"MALE","email":"mathias.cormann@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 9325 4227"}},
      {"id":"18","displayName":"Di Natale, Senator Richard","title":"Senator","givenName":"Richard","middleName":"","familyName":"Di Natale","honorific":"","salutation":"Senator","preferredName":"Richard","initials":"R.","gender":"MALE","email":"richard.di natale@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(03) 9654 0430"}},
      {"id":"19","displayName":"Dodson, Senator Patrick","title":"Senator","givenName":"Patrick","middleName":"","familyName":"Dodson","honorific":"","salutation":"Senator","preferredName":"Patrick","initials":"P.","gender":"MALE","email":"patrick.dodson@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08) 9193 5955"}},
      {"id":"20","displayName":"Duniam, Senator Jonathon","title":"Senator","givenName":"Jonathon","middleName":"","familyName":"Duniam","honorific":"","salutation":"Senator","preferredName":"Jonathon","initials":"J.R.","gender":"MALE","email":"jonathon.duniam@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(03) 6231 2444"}},
      {"id":"21","displayName":"Farrell, Senator the Hon Donald","title":"Senator the Hon","givenName":"Donald","middleName":"","familyName":"Farrell","honorific":"","salutation":"Senator","preferredName":"Don","initials":"D. E.","gender":"MALE","email":"donald.farrell@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08)  8231 8400"}},
      {"id":"22","displayName":"Faruqi, Senator Mehreen","title":"Senator","givenName":"Mehreen","middleName":"","familyName":"Faruqi","honorific":"","salutation":"Senator","preferredName":"Mehreen","initials":"M.","gender":"FEMALE","email":"mehreen.faruqi@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(02) 9211 1500"}},
      {"id":"23","displayName":"Fawcett, Senator the Hon David","title":"Senator the Hon","givenName":"David","middleName":"","familyName":"Fawcett","honorific":"","salutation":"Senator","preferredName":"David","initials":"D.J.","gender":"MALE","email":"david.fawcett@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 8205 1040"}},
      {"id":"24","displayName":"Fierravanti-Wells, Senator the Hon Concetta","title":"Senator the Hon","givenName":"Concetta","middleName":"","familyName":"Fierravanti-Wells","honorific":"","salutation":"Senator","preferredName":"Concetta","initials":"C.","gender":"FEMALE","email":"concetta.fierravanti-wells@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(02) 4226 1700"}},
      {"id":"25","displayName":"Fifield, Senator the Hon Mitchell","title":"Senator the Hon","givenName":"Mitchell","middleName":"","familyName":"Fifield","honorific":"","salutation":"Senator","preferredName":"Mitch","initials":"M. P.","gender":"MALE","email":"mitchell.fifield@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(03) 9584 2455"}},
      {"id":"26","displayName":"Gallacher, Senator Alexander","title":"Senator","givenName":"Alexander","middleName":"","familyName":"Gallacher","honorific":"","salutation":"Senator","preferredName":"Alex","initials":"A. M.","gender":"MALE","email":"alexander.gallacher@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08) 8269 6022"}},
      {"id":"27","displayName":"Georgiou, Senator Peter","title":"Senator","givenName":"Peter","middleName":"","familyName":"Georgiou","honorific":"","salutation":"Senator","preferredName":"Peter","initials":"P.","gender":"MALE","email":"peter.georgiou@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"One Nation","phoneNumber":"(08) 9226 1750"}},
      {"id":"28","displayName":"Gichuhi, Senator Lucy","title":"Senator","givenName":"Lucy","middleName":"","familyName":"Gichuhi","honorific":"","salutation":"Senator","preferredName":"Lucy","initials":"L.M.","gender":"FEMALE","email":"lucy.gichuhi@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 8205 1050"}},
      {"id":"29","displayName":"Griff, Senator Stirling","title":"Senator","givenName":"Stirling","middleName":"","familyName":"Griff","honorific":"","salutation":"Senator","preferredName":"Stirling","initials":"S.","gender":"MALE","email":"stirling.griff@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Centre Alliance","phoneNumber":"(08) 8212 1409"}},
      {"id":"30","displayName":"Hanson, Senator Pauline","title":"Senator","givenName":"Pauline","middleName":"","familyName":"Hanson","honorific":"","salutation":"Senator","preferredName":"Pauline","initials":"P.L.","gender":"FEMALE","email":"pauline.hanson@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"One Nation","phoneNumber":"(07) 3221 7644"}},
      {"id":"31","displayName":"Hanson-Young, Senator Sarah","title":"Senator","givenName":"Sarah","middleName":"","familyName":"Hanson-Young","honorific":"","salutation":"Senator","preferredName":"Sarah","initials":"S.C.","gender":"FEMALE","email":"sarah.hanson-young@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(08) 8227 0425"}},
      {"id":"32","displayName":"Hinch, Senator Derryn","title":"Senator","givenName":"Derryn","middleName":"","familyName":"Hinch","honorific":"","salutation":"Senator","preferredName":"Derryn","initials":"D.N.","gender":"MALE","email":"derryn.hinch@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Justice Party","phoneNumber":"(03) 9820 2222"}},
      {"id":"33","displayName":"Hume, Senator Jane","title":"Senator","givenName":"Jane","middleName":"","familyName":"Hume","honorific":"","salutation":"Senator","preferredName":"Jane","initials":"J.","gender":"FEMALE","email":"jane.hume@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(03) 9232 8820"}},
      {"id":"34","displayName":"Keneally, Senator the Hon Kristina","title":"Senator the Hon","givenName":"Kristina","middleName":"","familyName":"Keneally","honorific":"","salutation":"Senator","preferredName":"Kristina","initials":"K.K.","gender":"FEMALE","email":"kristina.keneally@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"02) 9891 9139"}},
      {"id":"35","displayName":"Ketter, Senator Christopher","title":"Senator","givenName":"Christopher","middleName":"","familyName":"Ketter","honorific":"","salutation":"Senator","preferredName":"Chris","initials":"C.R.","gender":"MALE","email":"christopher.ketter@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(07) 3881 3710"}},
      {"id":"36","displayName":"Kitching, Senator Kimberley","title":"Senator","givenName":"Kimberley","middleName":"","familyName":"Kitching","honorific":"","salutation":"Senator","preferredName":"Kimberley","initials":"K.","gender":"FEMALE","email":"kimberley.kitching@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 9374 1640"}},
      {"id":"37","displayName":"Leyonhjelm, Senator David","title":"Senator","givenName":"David","middleName":"","familyName":"Leyonhjelm","honorific":"","salutation":"Senator","preferredName":"David","initials":"D.E.","gender":"MALE","email":"david.leyonhjelm@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Democratic Party","phoneNumber":"(02) 9719 1078"}},
      {"id":"38","displayName":"Lines, Senator Susan","title":"Senator","givenName":"Susan","middleName":"","familyName":"Lines","honorific":"","salutation":"Senator","preferredName":"Sue","initials":"S.","gender":"FEMALE","email":"susan.lines@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08) 9481 4844"}},
      {"id":"39","displayName":"Macdonald, Senator the Hon Ian","title":"Senator the Hon","givenName":"Ian","middleName":"","familyName":"Macdonald","honorific":"","salutation":"Senator","preferredName":"Ian","initials":"I. D.","gender":"MALE","email":"ian.macdonald@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(07) 4771 3066"}},
      {"id":"40","displayName":"Marshall, Senator Gavin","title":"Senator","givenName":"Gavin","middleName":"","familyName":"Marshall","honorific":"","salutation":"Senator","preferredName":"Gavin","initials":"G. M.","gender":"MALE","email":"gavin.marshall@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 9348 9699"}},
      {"id":"41","displayName":"Martin, Senator Steven","title":"Senator","givenName":"Steven","middleName":"","familyName":"Martin","honorific":"","salutation":"Senator","preferredName":"Steve","initials":"S.L.","gender":"MALE","email":"steven.martin@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"National Party","phoneNumber":"(03) 6420 7560"}},
      {"id":"42","displayName":"McAllister, Senator Jennifer","title":"Senator","givenName":"Jennifer","middleName":"","familyName":"McAllister","honorific":"","salutation":"Senator","preferredName":"Jenny","initials":"J.R.","gender":"FEMALE","email":"jennifer.mcallister@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(02) 9719 8100"}},
      {"id":"43","displayName":"McCarthy, Senator Malarndirri","title":"Senator","givenName":"Malarndirri","middleName":"","familyName":"McCarthy","honorific":"","salutation":"Senator","preferredName":"Malarndirri","initials":"M.","gender":"FEMALE","email":"malarndirri.mccarthy@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08) 8941 0003"}},
      {"id":"44","displayName":"McGrath, Senator the Hon James","title":"Senator the Hon","givenName":"James","middleName":"","familyName":"McGrath","honorific":"","salutation":"Senator","preferredName":"James","initials":"J.","gender":"MALE","email":"james.mcgrath@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(07) 5441 1800"}},
      {"id":"45","displayName":"McKenzie, Senator the Hon Bridget","title":"Senator the Hon","givenName":"Bridget","middleName":"","familyName":"McKenzie","honorific":"","salutation":"Senator","preferredName":"Bridget","initials":"B.","gender":"FEMALE","email":"bridget.mckenzie@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"National Party","phoneNumber":"(03) 5441 4251"}},
      {"id":"46","displayName":"McKim, Senator Nicholas","title":"Senator","givenName":"Nicholas","middleName":"","familyName":"McKim","honorific":"","salutation":"Senator","preferredName":"Nick","initials":"N.J.","gender":"MALE","email":"nicholas.mckim@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(03) 6224 8899"}},
      {"id":"47","displayName":"Molan, Senator Andrew","title":"Senator","givenName":"Andrew","middleName":"","familyName":"Molan","honorific":"AO, DSC","salutation":"Senator","preferredName":"Jim","initials":"A.J.","gender":"MALE","email":"andrew.molan@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(02) 6284 3115"}},
      {"id":"48","displayName":"Moore, Senator Claire","title":"Senator","givenName":"Claire","middleName":"","familyName":"Moore","honorific":"","salutation":"Senator","preferredName":"Claire","initials":"C. M.","gender":"FEMALE","email":"claire.moore@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(07) 3252 7101"}},
      {"id":"49","displayName":"O'Neill, Senator Deborah","title":"Senator","givenName":"Deborah","middleName":"","familyName":"O'Neill","honorific":"","salutation":"Senator","preferredName":"Deborah","initials":"D.","gender":"FEMALE","email":"deborah.o'neill@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(02) 4367 4565"}},
      {"id":"50","displayName":"O'Sullivan, Senator Barry","title":"Senator","givenName":"Barry","middleName":"","familyName":"O'Sullivan","honorific":"","salutation":"Senator","preferredName":"Barry","initials":"B. J.","gender":"MALE","email":"barry.o'sullivan@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"National Party","phoneNumber":"(07) 4638 7555"}},
      {"id":"51","displayName":"Paterson, Senator James","title":"Senator","givenName":"James","middleName":"","familyName":"Paterson","honorific":"","salutation":"Senator","preferredName":"James","initials":"J.","gender":"MALE","email":"james.paterson@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(03) 9690 2201"}},
      {"id":"52","displayName":"Patrick, Senator Rex","title":"Senator","givenName":"Rex","middleName":"","familyName":"Patrick","honorific":"","salutation":"Senator","preferredName":"Rex","initials":"R.L.","gender":"MALE","email":"rex.patrick@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Centre Alliance","phoneNumber":"(08) 8232 1144"}},
      {"id":"53","displayName":"Payne, Senator the Hon Marise","title":"Senator the Hon","givenName":"Marise","middleName":"","familyName":"Payne","honorific":"","salutation":"Senator","preferredName":"Marise","initials":"M. A.","gender":"FEMALE","email":"marise.payne@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(02) 9687 8755"}},
      {"id":"54","displayName":"Polley, Senator Helen","title":"Senator","givenName":"Helen","middleName":"","familyName":"Polley","honorific":"","salutation":"Senator","preferredName":"Helen","initials":"H.","gender":"FEMALE","email":"helen.polley@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 6331 2599"}},
      {"id":"55","displayName":"Pratt, Senator Louise","title":"Senator","givenName":"Louise","middleName":"","familyName":"Pratt","honorific":"","salutation":"Senator","preferredName":"Louise","initials":"L.C.","gender":"FEMALE","email":"louise.pratt@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08) 9277 1502"}},
      {"id":"56","displayName":"Reynolds, Senator the Hon Linda","title":"Senator the Hon","givenName":"Linda","middleName":"","familyName":"Reynolds","honorific":"CSC","salutation":"Senator","preferredName":"Linda","initials":"L.K.","gender":"FEMALE","email":"linda.reynolds@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 9477 5411"}},
      {"id":"57","displayName":"Rice, Senator Janet","title":"Senator","givenName":"Janet","middleName":"","familyName":"Rice","honorific":"","salutation":"Senator","preferredName":"Janet","initials":"J.E.","gender":"FEMALE","email":"janet.rice@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(03) 9384 6199"}},
      {"id":"58","displayName":"Ruston, Senator the Hon Anne","title":"Senator the Hon","givenName":"Anne","middleName":"","familyName":"Ruston","honorific":"","salutation":"Senator","preferredName":"Anne","initials":"A.","gender":"FEMALE","email":"anne.ruston@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 8586 6600"}},
      {"id":"59","displayName":"Ryan, Senator the Hon Scott","title":"Senator the Hon","givenName":"Scott","middleName":"","familyName":"Ryan","honorific":"","salutation":"Senator","preferredName":"Scott","initials":"S.M.","gender":"MALE","email":"scott.ryan@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(03) 9326 1088"}},
      {"id":"60","displayName":"Scullion, Senator the Hon Nigel","title":"Senator the Hon","givenName":"Nigel","middleName":"","familyName":"Scullion","honorific":"","salutation":"Senator","preferredName":"Nigel","initials":"N. G.","gender":"MALE","email":"nigel.scullion@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 8948 3555"}},
      {"id":"61","displayName":"Seselja, Senator the Hon Zdenko","title":"Senator the Hon","givenName":"Zdenko","middleName":"","familyName":"Seselja","honorific":"","salutation":"Senator","preferredName":"Zed","initials":"Z. M.","gender":"MALE","email":"zdenko.seselja@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(02) 6247 6444"}},
      {"id":"62","displayName":"Siewert, Senator Rachel","title":"Senator","givenName":"Rachel","middleName":"","familyName":"Siewert","honorific":"","salutation":"Senator","preferredName":"Rachel","initials":"R.","gender":"FEMALE","email":"rachel.siewert@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(08) 9228 3277"}},
      {"id":"63","displayName":"Singh, Senator the Hon Lisa","title":"Senator the Hon","givenName":"Lisa","middleName":"","familyName":"Singh","honorific":"","salutation":"Senator","preferredName":"Lisa","initials":"L. M.","gender":"FEMALE","email":"lisa.singh@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 6223 1135"}},
      {"id":"64","displayName":"Sinodinos, Senator the Hon Arthur","title":"Senator the Hon","givenName":"Arthur","middleName":"","familyName":"Sinodinos","honorific":"AO","salutation":"Senator","preferredName":"Arthur","initials":"A","gender":"MALE","email":"arthur.sinodinos@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(02) 8289 9450"}},
      {"id":"65","displayName":"Smith, Senator David","title":"Senator","givenName":"David","middleName":"","familyName":"Smith","honorific":"","salutation":"Senator","preferredName":"David","initials":"David","gender":"MALE","email":"david.smith@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(02) 6230 0411"}},
      {"id":"66","displayName":"Smith, Senator Dean","title":"Senator","givenName":"Dean","middleName":"","familyName":"Smith","honorific":"","salutation":"Senator","preferredName":"Dean","initials":"D. A.","gender":"MALE","email":"dean.smith@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(08) 9481 0349"}},
      {"id":"67","displayName":"Steele-John, Senator Jordon","title":"Senator","givenName":"Jordon","middleName":"","familyName":"Steele-John","honorific":"","salutation":"Senator","preferredName":"Jordon","initials":"J.","gender":"MALE","email":"jordon.steele-john@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(08) 6245 3310"}},
      {"id":"68","displayName":"Sterle, Senator Glenn","title":"Senator","givenName":"Glenn","middleName":"","familyName":"Sterle","honorific":"","salutation":"Senator","preferredName":"Glenn","initials":"G.","gender":"MALE","email":"glenn.sterle@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08) 9455 1420"}},
      {"id":"69","displayName":"Stoker, Senator Amanda","title":"Senator","givenName":"Amanda","middleName":"","familyName":"Stoker","honorific":"","salutation":"Senator","preferredName":"Amanda","initials":"A.J.","gender":"FEMALE","email":"amanda.stoker@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Liberal Party","phoneNumber":"(07) 3001 8170"}},
      {"id":"70","displayName":"Storer, Senator Timothy","title":"Senator","givenName":"Timothy","middleName":"","familyName":"Storer","honorific":"","salutation":"Senator","preferredName":"Tim","initials":"T.R.","gender":"MALE","email":"timothy.storer@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Independent","phoneNumber":"(08) 8282 0220"}},
      {"id":"71","displayName":"Urquhart, Senator Anne","title":"Senator","givenName":"Anne","middleName":"","familyName":"Urquhart","honorific":"","salutation":"Senator","preferredName":"Anne","initials":"A. E.","gender":"FEMALE","email":"anne.urquhart@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(03) 6423 1933"}},
      {"id":"72","displayName":"Waters, Senator Larissa","title":"Senator","givenName":"Larissa","middleName":"","familyName":"Waters","honorific":"","salutation":"Senator","preferredName":"Larissa","initials":"L.J.","gender":"FEMALE","email":"larissa.waters@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(07) 3367 0566"}},
      {"id":"73","displayName":"Watt, Senator Murray","title":"Senator","givenName":"Murray","middleName":"","familyName":"Watt","honorific":"","salutation":"Senator","preferredName":"Murray","initials":"M.P.","gender":"MALE","email":"murray.watt@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(07) 5531 1033"}},
      {"id":"74","displayName":"Whish-Wilson, Senator Peter","title":"Senator","givenName":"Peter","middleName":"","familyName":"Whish-Wilson","honorific":"","salutation":"Senator","preferredName":"Peter","initials":"P. S.","gender":"MALE","email":"peter.whish-wilson@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Australian Greens","phoneNumber":"(03) 6331 0033"}},
      {"id":"75","displayName":"Williams, Senator John","title":"Senator","givenName":"John","middleName":"","familyName":"Williams","honorific":"","salutation":"Senator","preferredName":"John","initials":"J. R.","gender":"MALE","email":"john.williams@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"National Party","phoneNumber":"(02) 6721 4500"}},
      {"id":"76","displayName":"Wong, Senator the Hon Penny","title":"Senator the Hon","givenName":"Penny","middleName":"","familyName":"Wong","honorific":"","salutation":"Senator","preferredName":"Penny","initials":"P.","gender":"FEMALE","email":"penny.wong@aph.gov.au","phoneNumber":"","photoUrl":"","organisation":{"id":"","name":"Labor Party","phoneNumber":"(08) 8212 8272"}}
    ];
    
    // default returnType
    let returnType  = 'object';
    // let returnType  = 'observable';
    // let returnType  = 'promise';
  
    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        contacts.length = 0;
        // nobodies.length = 0;
        // stringers.length = 0;
      }
    
      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object';
    }
  
    const db = { contacts };
  
    switch (returnType) {
      
      case ('observable'):
        return of(db).pipe(delay(10));
      
        case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      
        default:
        return db;
    }

  }
  
}
