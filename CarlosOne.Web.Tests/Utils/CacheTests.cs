using CarlosOne.Web.Utils;
using System;
using System.Threading;
using Xunit;

namespace CarlosOne.Web.Tests.Utils
{
    public class CacheTests
    {
        [Fact]
        public void Cache_Global_Working_Ok()
        {
            // Create the global Cache and check the lazy instantiation
            Assert.NotNull(Cache.Global);

            // Cache a new object for 1 second and test its expiry
            Cache.Global.AddOrUpdate("test", new object(), 1);
            Assert.True(Cache.Global.Exists("test"));

            Thread.Sleep(1050); // wait a bit more than a second
            Assert.False(Cache.Global.Exists("test"));
        }

        [Fact]
        public void Cache_Update_Item_Ok()
        {
            Cache c = new Cache();
            object o1 = new object();
            object o2 = new object();

            c.AddOrUpdate("test", o1, 1);
            Assert.Same(c.Get("test"), o1);
            c.AddOrUpdate("test", o2, 1);
            Assert.Same(c.Get("test"), o2);

            Thread.Sleep(1050);
            Assert.False(c.Exists("test"));
        }

        [Fact]
        public void Cache_Generic_Ok()
        {
            Cache<int> c = new Cache<int>();

            c.AddOrUpdate("test", 42, 1);
            Assert.True(c.Exists("test"));
            Assert.Equal(42, c.Get("test"));

            Thread.Sleep(1050);
            Assert.False(c.Exists("test"));
        }

        [Fact]
        public void Cache_Restart_Timer_Ok()
        {
            Cache c = new Cache();
            object o1 = new object();

            c.AddOrUpdate("test", o1, 1);
            Thread.Sleep(800); // wait almost a second
            Assert.True(c.Exists("test")); // still exists

            c.AddOrUpdate("test", o1, 1, true); // update and refresh the timer
            Thread.Sleep(1000); // wait another second
            Assert.True(c.Exists("test")); // still exists

            c.AddOrUpdate("test", o1, 1, false); // default parameter 4: false - no refresh of the timer
            Thread.Sleep(500); // it should expire now
            Assert.Null(c.Get("test")); // no longer cached
        }

        [Fact]
        public void Cache_Indexer_Found_Ok()
        {
            Cache c = new Cache();
            object o1 = new object();
            c.AddOrUpdate("test", o1, 1);
            Assert.Same(c["test"], o1);
        }

        [Fact]
        public void Cache_Indexer_Not_Found_Ok()
        {
            Cache c = new Cache();
            Assert.Null(c["test2"]);
        }

        [Fact]
        public void Cache_Timeout_Zero_Throws()
        {
            Cache c = new Cache();
            void act() => c.AddOrUpdate("test", new object(), 0);
            Assert.Throws<ArgumentOutOfRangeException>(act);
        }

        [Fact]
        public void Cache_Clear_Ok()
        {
            Cache c = new Cache();
            c.AddOrUpdate("test", new object());
            Assert.True(c.Exists("test"));
            c.Clear();
            Assert.False(c.Exists("test"));
        }

        [Fact]
        public void Cache_Remove_By_Pattern_Ok()
        {
            Cache c = new Cache();
            c.AddOrUpdate("test1", new object());
            c.AddOrUpdate("test2", new object());
            c.AddOrUpdate("test3", new object());
            c.AddOrUpdate("Other", new object());
            Assert.True(c.Exists("test1"));
            Assert.True(c.Exists("Other"));

            c.Remove(k => k.StartsWith("test"));
            Assert.False(c.Exists("test1"));
            Assert.False(c.Exists("test2"));
            Assert.False(c.Exists("test3"));
            Assert.True(c.Exists("Other"));
        }
    }
}
