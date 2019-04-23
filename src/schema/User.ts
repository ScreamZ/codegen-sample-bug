export default [
  `
  type User @entity {
    id: String! @id
    username: String! @column
    email: String! @column
    profile: Profile! @embedded
    friendsCount: Int! # this field won't get a generated MongoDB field
    friends: [User]! @link
  }

  type Profile @entity(embedded: true) {
    name: String! @column
    age: Int! @column
  }`,
];
