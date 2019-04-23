const path = require("path")
const remark = require("remark")
const remarkHTML = require("remark-html")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { StringToSlug } = require("./src/utilities/utils")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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
        },
      })
    })
  })
}
