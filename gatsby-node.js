const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const parent = getNode(node.parent)
    if (parent.internal.type === "File") {
      console.log("\nname", parent.sourceInstanceName)
      createNodeField({
        name: `type`,
        node,
        value: parent.sourceInstanceName,
      })
    }
    console.log(`\n`, node)
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
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.Pages.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {
          slug: node.fields.slug,
        },
      })
    })
    //console.log(JSON.stringify(result, null, 4))
  })
}
