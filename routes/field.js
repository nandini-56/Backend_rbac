const express = require("express");
const router = express.Router();
const authenticate = require('../middlewares/auth');
const rbac = require('../middlewares/rbac');
const { getAllUsers } = require('../controllers/getAllUsers');  
const { getAllDomains } = require('../controllers/viewAllDomain');
const { addNewDomain } = require('../controllers/addDomain');
const { deleteDomain } = require("../controllers/deleteDomain");
const { addNewUrl } = require("../controllers/addUrl");
const { getAllUrls } = require( '../controllers/viewAllUrls');
const { deleteUrl } = require("../controllers/deleteUrl");

// Corrected route


/**
 * @swagger
 * /domain:
 *   post:
 *     summary: Add a new domain
 *     description: Adds a new domain to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               domainName:
 *                 type: string
 *                 description: The name of the domain to add.
 *                 example: "example.com"
 *     responses:
 *       201:
 *         description: Domain added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 domain:
 *                   type: object
 *                   properties:
 *                     domainName:
 *                       type: string
 *                       description: The name of the added domain.
 *                       example: "example.com"
 *       500:
 *         description: Error adding domain.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *                   description: The error message if something goes wrong.
 */
router.post('/addDomain', authenticate, rbac(['Admin']), addNewDomain);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Fetch all users
 *     description: Fetches all users from the database and returns a list of their usernames and roles.
 *     responses:
 *       200:
 *         description: A list of users with their username and role.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                   role:
 *                     type: string
 *       500:
 *         description: Server error while fetching users.
 */
router.get('/allUsers', authenticate, rbac(['Moderator']), getAllUsers );

/**
 * @swagger
 * /domains:
 *   get:
 *     summary: Fetch all domains
 *     description: Fetches all domains from the database and returns them.
 *     responses:
 *       200:
 *         description: A list of domains.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 domains:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       domainName:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: No domains found.
 *       500:
 *         description: Server error.
 */
router.get('/getAllDomain', authenticate, rbac(['Admin']), getAllDomains );


/**
 * @swagger
 * /deleteDomain/{domainName}:
 *   delete:
 *     summary: Delete a domain by domainName
 *     description: Deletes a domain with the given domainName.
 *     parameters:
 *       - in: path
 *         name: domainName
 *         schema:
 *           type: string
 *         required: true
 *         description: The domain name to delete
 *     responses:
 *       200:
 *         description: Domain deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Domain not found
 *       500:
 *         description: Server error
 */
router.delete('/domain/:domainName', authenticate, rbac(['Moderator']), deleteDomain );

/**
 * @swagger
 * /url:
 *   post:
 *     summary: Add a new URL
 *     description: Adds a new URL to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL to add.
 *                 example: "https://example.com"
 *     responses:
 *       201:
 *         description: URL added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 Url:
 *                   type: object
 *                   properties:
 *                     url:
 *                       type: string
 *                       description: The added URL.
 *                       example: "https://example.com"
 *       500:
 *         description: Error adding URL.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *                   description: The error message if something goes wrong.
 */
router.post('/addUrl', authenticate, rbac(['Admin']), addNewUrl );

/**
 * @swagger
 * /urls:
 *   get:
 *     summary: Get all URLs
 *     description: Fetch all the URLs from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of URLs.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 urls:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       url:
 *                         type: string
 *                         description: The URL.
 *                         example: "https://example.com"
 *       404:
 *         description: No URLs found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No URLs found"
 *       500:
 *         description: Server error while fetching URLs.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 *                 error:
 *                   type: string
 *                   description: The error message.
 *                   example: "Some internal server error occurred"
 */
router.get('/viewUrls', authenticate, rbac(['Admin']), getAllUrls);

/**
 * @swagger
 * /urls/{url}:
 *   delete:
 *     summary: Delete a URL
 *     description: Deletes a URL from the database based on the provided `url` parameter.
 *     parameters:
 *       - in: path
 *         name: url
 *         required: true
 *         description: The URL to be deleted.
 *         schema:
 *           type: string
 *           example: "https://example.com"
 *     responses:
 *       200:
 *         description: Successfully deleted the URL.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Url https://example.com deleted successfully"
 *       404:
 *         description: URL not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Url https://example.com not found"
 *       500:
 *         description: Server error while deleting the URL.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 *                 error:
 *                   type: string
 *                   description: The error message.
 *                   example: "Some internal server error occurred"
 */
router.get('/url/:urls', authenticate, rbac(['Moderator']), deleteUrl);

module.exports = router;
