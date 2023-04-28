using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TxActionListTest
    {
        public static readonly Address AddressA =
            new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

        private static readonly Currency FOO = Currency.Uncapped("FOO", 2, null);

        [Fact]
        public void Empty()
        {
            Assert.Empty(TxActionList.Empty);
            Assert.Empty(TxActionList.Empty.Actions);
            Assert.Throws<IndexOutOfRangeException>(() => TxActionList.Empty[0]);
            AssertBencodexEqual(
                Bencodex.Types.List.Empty,
                TxActionList.Empty.Bencoded);
        }

        [Fact]
        public void Constructor()
        {
            var emptyList = new TxActionList(new IAction[0]);
            Assert.Equal(TxActionList.Empty, emptyList);

            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var list = new TxActionList(actions);
            Assert.Equal(2, list.Count);
            Assert.Equal<IEnumerable<IValue>>(actions.Select(action => action.PlainValue), list);
        }

        [Fact]
        public void Index()
        {
            var emptyList = new TxActionList(new IAction[0]);
            Assert.Throws<ArgumentOutOfRangeException>(() => emptyList[-1]);
            Assert.Throws<IndexOutOfRangeException>(() => emptyList[0]);

            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var list = new TxActionList(actions);
            Assert.Throws<ArgumentOutOfRangeException>(() => list[-1]);
            Assert.Equal(actions[0].PlainValue, list[0]);
            Assert.Equal(actions[1].PlainValue, list[1]);
            Assert.Throws<IndexOutOfRangeException>(() => list[2]);
        }

        [Fact]
        public void Equality()
        {
            var mint = new Mint(AddressA, FOO * 100);
            var mint2 = new Mint(AddressA, FOO * 100);
            var transfer = new Transfer(AddressA, FOO * 100);
            IAction[] actions1 =
            {
                new DumbAction(default, "foo"),
                new DumbAction(AddressA, "bar"),
            };
            IAction[] actions2 =
            {
                new DumbAction(default, "foo"),
                new DumbAction(AddressA, "bar"),
            };
            IAction[] actions3 =
            {
                new DumbAction(default, "foo"),
                new DumbAction(AddressA, "baz"),
            };

            AssertEquality(
                new TxActionList(new IAction[] { mint }),
                new TxActionList(new IAction[] { mint }),
                true);
            AssertEquality(
                new TxActionList(new IAction[] { mint }),
                new TxActionList(new IAction[] { mint2 }),
                true);
            AssertEquality(
                new TxActionList(new IAction[] { mint }),
                new TxActionList(new IAction[] { transfer }),
                false);
            AssertEquality(
                new TxActionList(new IAction[] { mint }),
                new TxActionList(actions1),
                false);
            AssertEquality(
                new TxActionList(actions1),
                new TxActionList(actions1),
                true);
            AssertEquality(
                new TxActionList(actions1),
                new TxActionList(actions2),
                true);
            AssertEquality(
                new TxActionList(actions1),
                new TxActionList(actions3),
                false);
        }

        [Fact]
        public void Enumeration()
        {
            var emptyList = new TxActionList(new IAction[0]);
            Assert.Empty(emptyList);

            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var list = new TxActionList(actions);
            Assert.Equal<IEnumerable<IValue>>(actions.Select(action => action.PlainValue), list);
        }

        [Fact]
        public void Bencoded()
        {
            var emptyList = new TxActionList(new IAction[0]);
            AssertBencodexEqual(
                Bencodex.Types.List.Empty,
                emptyList.Bencoded);

            // TODO: We should introduce snapshot testing.
            IAction[] actions =
            {
                new DumbAction(default, "foo"),
                new DumbAction(default, "bar"),
            };
            var actionList = new TxActionList(actions);
            var expected = new List(actions.Select(action => action.PlainValue));
            AssertBencodexEqual(expected, actionList.Bencoded);

            var decoded = new TxActionList(actionList.Bencoded);
            Assert.Equal(actionList, decoded);

            var invalidInput = Dictionary.Empty;
            Assert.Throws<ArgumentException>(() => new TxActionList(invalidInput));
        }

        [Fact]
        public void JsonSerialize()
        {
            var systemActionList = new TxActionList(
                new IAction[] { new Mint(AddressA, FOO * 100) });
            var customActionList = new TxActionList(
                new IAction[]
                {
                    new DumbAction(default, "foo"),
                    new DumbAction(AddressA, "bar"),
                });
            var emptyCustomActionList = new TxActionList(Array.Empty<IAction>());
            var systemActonListJson = @"
                [
                  {
                    ""\uFEFFtype_id"": ""0"",
                    ""\uFEFFvalues"": {
                      ""\uFEFFamount"": ""10000"",
                      ""\uFEFFcurrency"": {
                        ""\uFEFFdecimals"": ""2"",
                        ""\uFEFFminters"": null,
                        ""\uFEFFticker"": ""\uFEFFFOO"",
                        ""\uFEFFtotalSupplyTrackable"": true
                      },
                      ""\uFEFFrecipient"": ""0xd6d639da5a58a78a564c2cd3db55fa7cebe244a9""
                    }
                  }
                ]";
            TestUtils.AssertJsonSerializable<TxActionList>(
                systemActionList,
                systemActonListJson,
                false);
            const string customActionListJson = @"
                [
                  {
                    ""\uFEFFitem"": ""\uFEFFfoo"",
                    ""\uFEFFrecord_rehearsal"": false,
                    ""\uFEFFtarget_address"": ""0x0000000000000000000000000000000000000000""
                  },
                  {
                    ""\uFEFFitem"": ""\uFEFFbar"",
                    ""\uFEFFrecord_rehearsal"": false,
                    ""\uFEFFtarget_address"": ""0xd6d639da5a58a78a564c2cd3db55fa7cebe244a9""
                  }
                ]";
            TestUtils.AssertJsonSerializable<TxActionList>(
                customActionList,
                customActionListJson,
                false);
            TestUtils.AssertJsonSerializable<TxActionList>(
                emptyCustomActionList,
                "[]",
                false);
        }

        private static void AssertEquality(TxActionList a, TxActionList b, bool equal)
        {
            if (equal)
            {
                Assert.True(a.Equals(b));
                Assert.True(((object)a).Equals(b));
                Assert.Equal(a.GetHashCode(), b.GetHashCode());
            }
            else
            {
                Assert.False(a.Equals(b));
                Assert.False(((object)a).Equals(b));
                Assert.NotEqual(a.GetHashCode(), b.GetHashCode());
            }

            Assert.False(a.Equals(null));
            Assert.False(((object)a).Equals(null));
            Assert.False(b.Equals(null));
            Assert.False(((object)b).Equals(null));
        }
    }
}
