import * as core from '@actions/core'
import {OctokitOptions} from '@octokit/core/dist-types/types'
import {RequestRequestOptions} from '@octokit/types'

export type RetryOptions = {
  doNotRetry?: number[]
  enabled?: boolean
}

fgffffffffffffffffffffffffffffffffff
  }

  if (exemptStatusCodes.length > 0) {
    retryOptions.doNotRetry = exemptStatusCodes
  }

  // The GitHub type has some defaults for `options.request`
  // see: https://github.com/actions/toolkit/blob/4fbc5c941a57249b19562015edbd72add14be93d/packages/github/src/utils.ts#L15
  // We pass these in here so they are not overidden.
  const requestOptions: RequestRequestOptions = {
    ...defaultOptions.request,
    retries
  }

  core.debug(
    `GitHub client configured with: (retries: ${
      requestOptions.retries
    }, retry-exempt-status-code: ${
      retryOptions.doNotRetry ?? 'octokit default: [400, 401, 403, 404, 422]'
    })`
  )

  return [retryOptions, requestOptions]
}

export function parseNumberArray(listString: string): number[] {
  if (!listString) {
    return []
  }

  const split = listString.trim().split(',')
  return split.map(x => parseInt(x))
}
