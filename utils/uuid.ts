import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet(
  '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
)

const prefixes = {
  key: {
    name: 'key',
    entropy: 16,
  },
  api: {
    name: 'api',
    entropy: 16,
  },
  request: {
    name: 'req',
    entropy: 16,
  },
  keyAuth: {
    name: 'key_auth',
    entropy: 32,
  },
  quiz: {
    name: 'quiz',
    entropy: 8,
  },
  answer: {
    name: 'ans',
    entropy: 16,
  },
  question: {
    name: 'ques',
    entropy: 12,
  },
} as const

const removeDash = (str: string): string => {
  const replaced = str.replace(/-/g, '')
  return replaced
}

const newCryptoUUID = (prefix: keyof typeof prefixes): string => {
  const idType = prefixes[prefix]
  const id = crypto.randomUUID()
  const formattedID = `${idType.name}${removeDash(id)}`

  return formattedID
}

/**
 * Generate UUID using nanoid
 * @param prefix - identifier
 * @param entropy - number of chars for id
 * @returns - formatted id
 */
export default function (prefix: keyof typeof prefixes): string {
  const idType = prefixes[prefix]
  return [idType.name, nanoid(idType.entropy)].join('_')
}
