const StringToSlug = string =>
  string
    .replace(/\s/g, "-")
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .toLowerCase()

module.exports = { StringToSlug }
