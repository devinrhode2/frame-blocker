
chrome.declarativeWebRequest.onRequest.addRules([{
  //for this stupid little google plus notifications iframe on google search.. block it. (it's not visible anyway)
  conditions: [
    new chrome.declarativeWebRequest.RequestMatcher({
      resourceType: ['sub_frame'],
      url: {
        urlContains: 'https://plus.google.com/u/0/_/notifications/frame?sourceid=1&hl=en&origin=https%3A%2F%2Fwww.google.com',
      },
      stages: ['onBeforeRequest']
    })
  ],
  actions: [
    new chrome.declarativeWebRequest.RedirectToEmptyDocument() //could also .CancelRequest(), but a GET error and strange chrome page load in place of it..
  ]
}/*,{
  conditions:[
    new chrome.declarativeWebRequest.RequestMatcher({
      resourceType: ['sub_frame']
    })
  ],
  actions: [
    new chrome.declarativeWebRequest.RemoveResponseHeader('x-frame-options')
  ]
}
*/
]);
