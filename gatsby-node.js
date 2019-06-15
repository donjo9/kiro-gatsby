const path = require("path")
const remark = require("remark")
const remarkHTML = require("remark-html")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { StringToSlug } = require("./src/utilities/utils")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const parent = getNode(node.parent)

    if (parent.internal.type === "File") {
      createNodeField({
        name: `type`,
        node,
        value: parent.sourceInstanceName,
      })
    }
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      Pages: allMarkdownRemark(filter: { fields: { type: { eq: "pages" } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
              special {
                overskrift
                body
                teaser
                enable
                SEO {
                  seodescription
                  seotags {
                    tag
                  }
                }
              }
              subtopic {
                title
                content
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.Pages.edges.forEach(({ node }) => {
      let special = []
      if (node.frontmatter.special) {
        node.frontmatter.special.forEach(e => {
          if (!e.enable) {
            return
          }
          const o = StringToSlug(e.overskrift)
          const htmlBody = remark()
            .use(remarkHTML)
            .processSync(e.body)
            .toString()
          special.push({
            path: node.fields.slug + o,
            overskrift: e.overskrift,
            teaser: e.teaser,
          })
          createPage({
            path: node.fields.slug + o,
            component: path.resolve(`./src/templates/specials-page.js`),
            context: {
              overskrift: e.overskrift,
              body: htmlBody,
              SEO: e.SEO,
            },
          })
        })
      }
      let subtopic = []
      if (node.frontmatter.subtopic) {
        node.frontmatter.subtopic.forEach(e => {
          const o = StringToSlug(e.title)
          const htmlBody = remark()
            .use(remarkHTML)
            .processSync(e.content)
            .toString()
          subtopic.push({
            path: node.fields.slug + o,
            title: e.title,
          })
          createPage({
            path: node.fields.slug + o,
            component: path.resolve(`./src/templates/subtopics-page.js`),
            context: {
              title: e.title,
              content: htmlBody,
            },
          })
        })
      }
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {
          slug: node.fields.slug,
          special,
          subtopic,
          maxWidth: 400,
          quality: 92,
        },
      })
    })
  })
}
