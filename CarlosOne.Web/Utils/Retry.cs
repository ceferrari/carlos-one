using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace CarlosOne.Web.Utils
{
	public static class Retry
	{
		private static TimeSpan _retryInterval = TimeSpan.FromSeconds(30);
		private const int _maxAttemptCount = 3;

		public static void Do(
			Action action,
			TimeSpan? retryInterval = null,
			int maxAttemptCount = _maxAttemptCount)
		{
			Do<object>(() =>
			{
				action();
				return null;
			}, retryInterval, maxAttemptCount);
		}

		public static async Task DoAsync(
			Func<Task> action,
			TimeSpan? retryInterval = null,
			int maxAttemptCount = _maxAttemptCount)
		{
			await DoAsync<object>(async () =>
			{
				await action();
				return Task.CompletedTask;
			}, retryInterval, maxAttemptCount);
		}

		public static T Do<T>(
			Func<T> action,
			TimeSpan? retryInterval = null,
			int maxAttemptCount = _maxAttemptCount)
		{
			if (retryInterval == TimeSpan.Zero)
				throw new ArgumentOutOfRangeException("retryInterval must be greater than zero.");

			if (maxAttemptCount < 1)
				throw new ArgumentOutOfRangeException("maxAttemptCount must be greater than zero.");

			var exceptions = new List<Exception>();

			for (int attempted = 0; attempted < maxAttemptCount; attempted++)
			{
				try
				{
					if (attempted > 0)
					{
						Thread.Sleep(retryInterval ?? _retryInterval);
					}
					return action();
				}
				catch (Exception ex)
				{
					exceptions.Add(ex);
				}
			}
			throw new AggregateException(exceptions);
		}

		public static async Task<T> DoAsync<T>(
			Func<Task<T>> action,
			TimeSpan? retryInterval = null,
			int maxAttemptCount = _maxAttemptCount)
		{
			if (retryInterval == TimeSpan.Zero)
				throw new ArgumentOutOfRangeException("retryInterval must be greater than zero.");

			if (maxAttemptCount < 1)
				throw new ArgumentOutOfRangeException("maxAttemptCount must be greater than zero.");

			var exceptions = new List<Exception>();

			for (int attempted = 0; attempted < maxAttemptCount; attempted++)
			{
				try
				{
					if (attempted > 0)
					{
						Thread.Sleep(retryInterval ?? _retryInterval);
					}
					return await action();
				}
				catch (Exception ex)
				{
					exceptions.Add(ex);
				}
			}
			throw new AggregateException(exceptions);
		}
	}
}
