window.BENCHMARK_DATA = {
  "lastUpdate": 1698296473890,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab2a1328b2854206290ba75aefd906faa95dcc9e",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-04T12:00:35Z",
          "tree_id": "1bed0488e4e5e26951a5fed09d30df78dabb68c4",
          "url": "https://github.com/planetarium/libplanet/commit/ab2a1328b2854206290ba75aefd906faa95dcc9e"
        },
        "date": 1696421681829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50412.84782608696,
            "unit": "ns",
            "range": "± 2846.411073363552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8305894.153846154,
            "unit": "ns",
            "range": "± 81909.20364937239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22396426.133333333,
            "unit": "ns",
            "range": "± 229174.19028511498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55835639.071428575,
            "unit": "ns",
            "range": "± 891544.2980060767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112983969.33333333,
            "unit": "ns",
            "range": "± 1121450.5429737396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224008577.6,
            "unit": "ns",
            "range": "± 2651808.148507079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277427.44444444444,
            "unit": "ns",
            "range": "± 6164.971160537282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267373.6,
            "unit": "ns",
            "range": "± 8598.534236238447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232862.07692307694,
            "unit": "ns",
            "range": "± 6322.738374616347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4425174.125,
            "unit": "ns",
            "range": "± 106099.68958865893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4127524,
            "unit": "ns",
            "range": "± 82639.60350824536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19861.63440860215,
            "unit": "ns",
            "range": "± 1365.691191341413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86306.69620253165,
            "unit": "ns",
            "range": "± 4037.9419845543125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72204.13513513513,
            "unit": "ns",
            "range": "± 2437.946838384051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83672.47916666667,
            "unit": "ns",
            "range": "± 13098.580385899733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5480.115789473684,
            "unit": "ns",
            "range": "± 582.0986401596381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20558.75,
            "unit": "ns",
            "range": "± 1609.7155355102832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393890.7216494845,
            "unit": "ns",
            "range": "± 90803.6426952344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652717.05,
            "unit": "ns",
            "range": "± 92839.16546066824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085024.5,
            "unit": "ns",
            "range": "± 99373.0176415062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9424452.273684211,
            "unit": "ns",
            "range": "± 548727.7906872781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5026402.612630208,
            "unit": "ns",
            "range": "± 24459.250458006478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1585720.363560268,
            "unit": "ns",
            "range": "± 2107.316094220708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097329.308984375,
            "unit": "ns",
            "range": "± 4306.653008966962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639711.7195870536,
            "unit": "ns",
            "range": "± 5971.0212056997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825880.9192457933,
            "unit": "ns",
            "range": "± 892.7137845071283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753377.7573242188,
            "unit": "ns",
            "range": "± 660.4687736437502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3520458.8125,
            "unit": "ns",
            "range": "± 67629.90266365783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3636863.827586207,
            "unit": "ns",
            "range": "± 106154.93330507503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4347901.631578947,
            "unit": "ns",
            "range": "± 94754.45341877107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4371994.621621622,
            "unit": "ns",
            "range": "± 147276.50497285544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10608291.945945946,
            "unit": "ns",
            "range": "± 352758.01981882285"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1691d834a585bd5b96539e3c138d3b1f111a77d9",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-25T00:31:37Z",
          "tree_id": "82d924812613895c5f3c2a2cf73e7fd310075947",
          "url": "https://github.com/planetarium/libplanet/commit/1691d834a585bd5b96539e3c138d3b1f111a77d9"
        },
        "date": 1698194746788,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5047266.654447115,
            "unit": "ns",
            "range": "± 19899.303077945642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1606889.0927734375,
            "unit": "ns",
            "range": "± 2206.4311747985735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082617.7639723558,
            "unit": "ns",
            "range": "± 1569.204335960485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606306.95,
            "unit": "ns",
            "range": "± 949.7009951931302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824969.7317940848,
            "unit": "ns",
            "range": "± 407.00731905627305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766662.1111027644,
            "unit": "ns",
            "range": "± 433.4296244228078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3445612.5,
            "unit": "ns",
            "range": "± 118641.9897068829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3575072.88,
            "unit": "ns",
            "range": "± 93845.34328143299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4417299.555555556,
            "unit": "ns",
            "range": "± 138716.812150602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4324177.428571428,
            "unit": "ns",
            "range": "± 168837.66030500288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10805484.975,
            "unit": "ns",
            "range": "± 257384.56612500743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49541.97647058823,
            "unit": "ns",
            "range": "± 2549.050943728958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8170260.3125,
            "unit": "ns",
            "range": "± 151194.41174493133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22316140,
            "unit": "ns",
            "range": "± 270755.84457139875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56786237.615384616,
            "unit": "ns",
            "range": "± 225232.150496822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113401713.42857143,
            "unit": "ns",
            "range": "± 585125.7742795678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223469785.8,
            "unit": "ns",
            "range": "± 2332470.4461280103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275499.5,
            "unit": "ns",
            "range": "± 9279.87267139465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266368.8095238095,
            "unit": "ns",
            "range": "± 9557.285320348097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243495.64150943398,
            "unit": "ns",
            "range": "± 9984.952629012741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4408652.133333334,
            "unit": "ns",
            "range": "± 57753.13608784333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162282.285714286,
            "unit": "ns",
            "range": "± 48569.69546067648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22481.515789473684,
            "unit": "ns",
            "range": "± 1619.9086713365803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90204.63541666667,
            "unit": "ns",
            "range": "± 6271.992867409666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77154.1836734694,
            "unit": "ns",
            "range": "± 5461.94373156123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86179.94845360825,
            "unit": "ns",
            "range": "± 7554.462033255486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5835.134020618557,
            "unit": "ns",
            "range": "± 725.1958877443905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21127.9010989011,
            "unit": "ns",
            "range": "± 1543.2159714551733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411961.5753424657,
            "unit": "ns",
            "range": "± 69326.95005249437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2765524.552631579,
            "unit": "ns",
            "range": "± 92720.00469320505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2165290.0545454547,
            "unit": "ns",
            "range": "± 90270.46651373904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9281842.666666666,
            "unit": "ns",
            "range": "± 353119.61566495226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "537f0b60b24d70cd06e6bcc0a23f04bfc912bc2c",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-26T04:43:54Z",
          "tree_id": "ef92f38a3310a63caa72b8e04aab07af7a5d1b02",
          "url": "https://github.com/planetarium/libplanet/commit/537f0b60b24d70cd06e6bcc0a23f04bfc912bc2c"
        },
        "date": 1698296440127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59026.8,
            "unit": "ns",
            "range": "± 3530.1915827948987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6037127.225446428,
            "unit": "ns",
            "range": "± 12881.051233223663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898067.248046875,
            "unit": "ns",
            "range": "± 6318.400756497609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294652.570033482,
            "unit": "ns",
            "range": "± 1046.789469641579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3127983.0597098214,
            "unit": "ns",
            "range": "± 1830.6005925234424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989010.878125,
            "unit": "ns",
            "range": "± 1085.5856349681872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891312.8578404018,
            "unit": "ns",
            "range": "± 1186.3098803085738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10216370.677419355,
            "unit": "ns",
            "range": "± 305886.44198529917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27061219.15,
            "unit": "ns",
            "range": "± 618298.2783104024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67396461.2,
            "unit": "ns",
            "range": "± 343797.89809051645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135965839.14285713,
            "unit": "ns",
            "range": "± 572709.8091600421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269323261.8,
            "unit": "ns",
            "range": "± 1113519.3430325955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4256008.911764706,
            "unit": "ns",
            "range": "± 107511.72630204822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4464721.052631579,
            "unit": "ns",
            "range": "± 180061.52705726342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5392702.8,
            "unit": "ns",
            "range": "± 66410.85578234072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5172341.714285715,
            "unit": "ns",
            "range": "± 90310.47799710692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12843446.333333334,
            "unit": "ns",
            "range": "± 460390.96826918464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321411.2456140351,
            "unit": "ns",
            "range": "± 13849.275622213065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315446.9375,
            "unit": "ns",
            "range": "± 6091.791706537029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287529.0930232558,
            "unit": "ns",
            "range": "± 10534.548409002486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5284317.076923077,
            "unit": "ns",
            "range": "± 59234.094490225165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4897918.5,
            "unit": "ns",
            "range": "± 29791.69898517164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24105.521739130436,
            "unit": "ns",
            "range": "± 1588.4505372885637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103976.0752688172,
            "unit": "ns",
            "range": "± 7029.756650863527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88974.37142857142,
            "unit": "ns",
            "range": "± 4290.097448882831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95790.17708333333,
            "unit": "ns",
            "range": "± 9659.364673446551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6386.595744680851,
            "unit": "ns",
            "range": "± 611.3245854690468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23635.98947368421,
            "unit": "ns",
            "range": "± 1740.2834172135422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688756.0535714286,
            "unit": "ns",
            "range": "± 66308.98616557312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3267013.4444444445,
            "unit": "ns",
            "range": "± 82026.2711613848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2489017.8985507246,
            "unit": "ns",
            "range": "± 119092.17139618036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10902380.763636364,
            "unit": "ns",
            "range": "± 458267.96934799186"
          }
        ]
      }
    ]
  }
}