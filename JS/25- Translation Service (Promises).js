/**
 *  About Promises
 * 
 *  The Promise object represents the eventual completion (or failure) of an asynchronous operation,
 *  and its resulting value.
 *  
 *  The methods: 
 *  - promise.then(),
 *  - promise.catch(),
 *  - promise.finally() 
 *  are used to associate further action with a promise that becomes settled.
 * 
 *  For example:
 * 
 *  const myPromise = new Promise((resolve, reject) => {
 *      const myArray = [1,2,3,4,5];
 *      const randomNumber = Math.floor(Math.random() * myArray.length + 1);
 *  
 *      if(myArray[randomNumber]){
 *          resolve(myArray[randomNumber]);
 *      }
 *      
 *      reject(new Error('Array index error!'));
 *  })
 * 
 *  myPromise
 *      .then((onfulfilled) => {
 *          console.log(onfulfilled);
 *      })
 *      .catch((error) => {
 *          console.error('Error:', error.message);
 *          return Promise.reject(error);
 *      })
 *      .finally(function () {
 *          console.log('Promise completed');
 *      });
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 *  Instructions
 * 
 *  In this exercise, you'll be providing a TranslationService that provides basic translation services to
 *  free members, and advanced translation to premium members with quality assurances.
 */

/**
 *  The API
 * 
 *  You have found an outer space translation API that fulfills any translation request in a reasonable amount of time.
 *  You want to capitalize on this. The space translators are extremely fickle and hate redundancy,
 *  so they also provide API storage satellites where you can fetch past translations without bothering them.
 */

/**
 *  Fetching a translation
 *  
 *  api.fetch(text) fetches a translation of text from the API storage and returns a promise that provides two values:
 *  
 *  - translation: the actual translation
 *  - quality: the quality expressed as a number
 * 
 *  If a translation is not found in the API storage,
 *  the API throws a NotAvailable error. Translations can be added using the api.request method.
 *  If 'text' is not translatable, the API throws an Untranslatable error.
 * 
 *  api.fetch('jIyaj'); // => Promise({ resolved: 'I understand' })
 */

/**
 *  Requesting a translation
 *  
 *  Some translations are sure to exist, but haven't been added to the API storage yet.
 *  That's the difference between NotAvailable ( not in storage, but can be requested ) and
 *  Untranslatable ( cannot be translated ).
 *  
 *  api.request(text, callback) requests that a translation of text be performed and added into the API storage.
 *  On completion the callback function is called.
 * 
 *  - On success callback is passed undefined: 
 *      this indicates the translation was successful and is accessible using the api.fetch method.
 * 
 *  - On failure callback is passed an error: 
 *      this indicates something went wrong. The outspace API is unstable, which means that the API fails often.
 *      If that happens, it is okay to api.request again.
 * 
 * 
    api.request('majQa’', callback);
    // => undefined
    //
    // later: the passed callback is called with undefined
    //        because it was successful.
 */

/**
 *  Warning
 * 
 *  The API works its magic by teleporting in the various translators when a request comes in.
 *  This is a very costly action, so it shouldn't be called when a translation is available.
 *  Unfortunately, not everyone reads the manual, so there is a system in place to kick-out bad actors.
 *
 *  If an api.request is called for text is available, the API throws an AbusiveClientError for this call,
 *  and every call after that. Ensure that you never request a translation if something has already been translated.
 */

class TranslationService {
    constructor(api){
        this.api = api;
    }
}

/**
 *  Fetch a translation, ignoring the quality
 *  
 *  The free service only provides translations that are currently in the API storage.
 *  
 *  Implement a method free(text) that provides free members with translation that already exist in the API storage.
 *  Ignore the quality and forward any errors thrown by the API.
 * 
 *  - Returns the translation if it can be retrieved, regardless of its quality
 *  - Forwards any error from the translation API
 *  - Uses the api.fetch method (api.fetch returns a promise)
 */

/**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
TranslationService.prototype.free = async function(text) {
    const {translation} = await this.api.fetch(text);
    return translation;
}
/* 
TranslationService.prototype.free = async function(text) {
    const response = await this.api.fetch(text);
    return response.translation;
}
 */
/* 
TranslationService.prototype.free = async function(text) {
    return await this.api.fetch(text)
        .then(response => response.translation);
}
 */
service.free('jIyaj');
// => Promise<...> resolves "I understand."

service.free("jIyajbe'");
// => Promise<...> rejects Error("Not yet translated")


/**
 *  Fetch a batch of translations, all-or-nothing
 * 
 *  Implement a method batch([text, text, ...]) for free members that translates an array of text using the free service, returning all the translations, or a single error.
 *  
 *  - Resolves with all the translations (in the same order), if they are all available
 *  - Rejects with the first error that is encountered
 *  - Rejects with a BatchIsEmpty error if no texts are given
 */

/**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
TranslationService.prototype.batch = async function(texts) {
    if(texts.length === 0){
        throw new BatchIsEmpty();
    }
    
    return await Promise.all(texts.flatMap(this.free.bind(this)));
    //return await Promise.all(texts.flatMap(currentText => this.free(currentText)));
}

service.batch(['jIyaj', "majQa'"]);
// => Promise<...> resolves ["I understand.", "Well done!"]

service.batch(['jIyaj', "jIyajbe'"]);
// => Promise<...> rejects new Error("Not yet translated")

service.batch([]);
// => Promise<...> rejects BatchIsEmpty()

/**
 *  Request a translation, retrying at most 2 times
 * 
 *  Implement a premium user method request(text), that requests a translation be added to the API storage.
 *  The request should automatically retry if a failure occurs.
 *  It should perform no more than 3 calls for the same request (don't upset the space translators!!!).
 *  
 *  If api.request does not return an error, resolve with undefined
 *  If api.request returns an error, retry at most two times
 *  If you run out of retries, reject with the last error received
 */

/**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
TranslationService.prototype.request = async function(text, attempt = 1) {
    try {
        await new Promise((resolve, reject) => {
            this.api.request(text, (error) => (error) ? reject(error) : resolve());
        });
    } catch (error) {
        if(attempt === 3){
            throw error;
        }
        return await this.request(text, attempt + 1);
    }
}

service.request("jIyajbe'");
// => Promise<...> resolves (with nothing), can now be retrieved using the fetch API

/**
 *  Request a translation, retrying at most 2 times
 *  
 *  Implement a premium user method request(text),
 *  that requests a translation be added to the API storage.
 *  The request should automatically retry if a failure occurs.
 *  It should perform no more than 3 calls for the same request (don't upset the space translators!!!).
 *  
 *  - If api.request does not return an error, resolve with undefined
 *  - If api.request returns an error, retry at most two times
 *  - If you run out of retries, reject with the last error received
 */

/**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
TranslationService.prototype.premium = async function(text, minimumQuality) {
    try{
        const {translation, quality} = await this.api.fetch(text);

        if(minimumQuality > quality){
            throw new QualityThresholdNotMet(text);
        }

        return translation;
    }catch(error){
        if( error instanceof QualityThresholdNotMet){
            throw error;
        }
        
        await this.request(text);
        return await this.premium(text, minimumQuality);
    }
}
/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
class QualityThresholdNotMet extends Error {
    constructor(text){
        super(`The translation of ${text} does not meet the requested quality threshold.`.trim());
        this.name = 'QualityThresholdNotMet';
        this.text = text;
    }
}
/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
class BatchIsEmpty extends Error {
    constructor(){
        super(`Requested a batch translation, but there are no texts in the batch.`.trim());
        this.name = 'BatchIsEmpty';
    }
}