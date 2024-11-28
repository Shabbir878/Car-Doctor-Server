/**
 * ----------------------------
 *       MAKE API SECURE
 * ----------------------------
 * 1. Assign two tokens for each person(refresh token,access token)
 * 2. Access token contains: User Identification(email,role etc). Valid for a shorter duration
 * 3. Refresh token contains: To recreate an access token that was expired
 * 4. If refresh is invalid then logout the user
 */

/**
 * Install jsonwebtoken
 * jwt.sign(payload,secret,{expiresIn:})
 * token client
 */

/**
 * How to store token in the client side
 * 1. Memory --> Ok type
 * 2. Local Storage --> Ok type
 * 3. Cookies --> http only
 */

/**
 * Set cookies with http only. For development, secure:false
 * Cors
 * Client side axios setting
 * In axios, set withCredentials:true
 */

/**
 * To send cookies from the client make sure you added withCredentials:true for the API call using Axios
 * Use cookie parser as middleware
 */
