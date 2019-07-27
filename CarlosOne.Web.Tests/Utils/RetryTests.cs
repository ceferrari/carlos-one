using CarlosOne.Web.Utils;
using System;
using System.Threading.Tasks;
using Xunit;

namespace CarlosOne.Web.Tests.Utils
{
    public class RetryTests
    {
        #region Sync

        [Fact]
        public void Retry_Ok()
        {
            object o1 = new object();
            object act() => Retry.Do(() => { return o1; });
            Assert.Same(act(), o1);
        }

        [Fact]
        public void Retry_Failed_Throws()
        {
            void act() => Retry.Do(() => { throw new Exception(); }, TimeSpan.FromSeconds(1), 3);
            Assert.Throws<AggregateException>(act);
        }

        [Fact]
        public void Retry_Interval_Zero_Throws()
        {
            void act() => Retry.Do(() => { }, TimeSpan.FromSeconds(0));
            Assert.Throws<ArgumentOutOfRangeException>(act);
        }

        [Fact]
        public void Retry_Attempts_Zero_Throws()
        {
            void act() => Retry.Do(() => { }, null, 0);
            Assert.Throws<ArgumentOutOfRangeException>(act);
        }

        #endregion

        #region Async

        [Fact]
        public async Task Retry_Ok_Async()
        {
            object o1 = new object();
            async Task<object> act() => await Retry.DoAsync(async () => { return await Task.FromResult(o1); });
            Assert.Same(await act(), o1);
        }

        [Fact]
        public async Task Retry_Failed_Throws_Async()
        {
            async Task act() => await Retry.DoAsync(async () => { await Task.Run(() => throw new Exception()); }, TimeSpan.FromSeconds(1), 3);
            await Assert.ThrowsAsync<AggregateException>(act);
        }

        [Fact]
        public async Task Retry_Interval_Zero_Throws_Async()
        {
            async Task act() => await Retry.DoAsync(async () => { await Task.Run(() => { }); }, TimeSpan.FromSeconds(0));
            await Assert.ThrowsAsync<ArgumentOutOfRangeException>(act);
        }

        [Fact]
        public async Task Retry_Attempts_Zero_Throws_Async()
        {
            async Task act() => await Retry.DoAsync(async () => { await Task.Run(() => { }); }, null, 0);
            await Assert.ThrowsAsync<ArgumentOutOfRangeException>(act);
        }

        #endregion
    }
}
