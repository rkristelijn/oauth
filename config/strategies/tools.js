module.exports = (user, currentStrategy) => {
  if (user.google && 'google' !== currentStrategy)
    return { 'google.id': user.google.id }
  if (user.facebook && 'facebook' !== currentStrategy)
    return { 'facebook.id': user.facebook.id }
  if (user.github && 'github' !== currentStrategy)
    return { 'github.id': user.github.id }
  if (user.linkedin && 'linkedin' !== currentStrategy)
    return { 'linkedin.id': user.linkedin.id }
  if (user.twitter && 'twitter' !== currentStrategy)
    return { 'twitter.id': user.twitter.id }
}