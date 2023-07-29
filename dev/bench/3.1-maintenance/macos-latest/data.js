window.BENCHMARK_DATA = {
  "lastUpdate": 1690509448701,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a987187212c0fd2aea272fe3a12bb3c27697fde3",
          "message": "Merge pull request #3336 from greymistcube/release/3.1.0\n\n🚀 Release 3.1.0",
          "timestamp": "2023-07-27T18:11:36+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/planetarium/libplanet/commit/a987187212c0fd2aea272fe3a12bb3c27697fde3"
        },
        "date": 1690509048402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8583366.57142857,
            "unit": "ns",
            "range": "± 79560.32005457755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21438703.566666666,
            "unit": "ns",
            "range": "± 274609.94122793427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52731801.766666666,
            "unit": "ns",
            "range": "± 465600.84786273236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106380173.91666667,
            "unit": "ns",
            "range": "± 278832.62723246013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217314814.63333333,
            "unit": "ns",
            "range": "± 2623061.1640420617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60095.24731182796,
            "unit": "ns",
            "range": "± 11947.810133765928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317338.52857142856,
            "unit": "ns",
            "range": "± 15313.124445448111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310665.72164948453,
            "unit": "ns",
            "range": "± 21877.978250468295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309429.78571428574,
            "unit": "ns",
            "range": "± 18561.05865548544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4047173.1363636362,
            "unit": "ns",
            "range": "± 95879.68215551417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3766292.1739130435,
            "unit": "ns",
            "range": "± 93480.13433960285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20287.815789473683,
            "unit": "ns",
            "range": "± 2861.6205617869145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87369.58888888889,
            "unit": "ns",
            "range": "± 6337.512869289852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91203.47474747474,
            "unit": "ns",
            "range": "± 14749.234944768777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108582.6530612245,
            "unit": "ns",
            "range": "± 18948.64070545901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5715.333333333333,
            "unit": "ns",
            "range": "± 1016.3833577073968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20477.367346938776,
            "unit": "ns",
            "range": "± 4483.093368682483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464567,
            "unit": "ns",
            "range": "± 145708.525108445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773628.593023256,
            "unit": "ns",
            "range": "± 140893.31216085437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984382.297979798,
            "unit": "ns",
            "range": "± 179850.3590395433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5760218.02247191,
            "unit": "ns",
            "range": "± 316738.21965203446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376967.6296296297,
            "unit": "ns",
            "range": "± 91968.0905854551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667676.8181818184,
            "unit": "ns",
            "range": "± 116221.49661340279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584146.934782608,
            "unit": "ns",
            "range": "± 167168.17475244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3899923.275,
            "unit": "ns",
            "range": "± 203797.9558938354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7068366.714285715,
            "unit": "ns",
            "range": "± 228174.78314474467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6198461.865885417,
            "unit": "ns",
            "range": "± 51611.34387791149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924498.4001302083,
            "unit": "ns",
            "range": "± 14364.503912236192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284098.1307198661,
            "unit": "ns",
            "range": "± 19876.592729319054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624402.8795072115,
            "unit": "ns",
            "range": "± 41387.62516991345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871318.515234375,
            "unit": "ns",
            "range": "± 7625.782080871088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713612.5549665178,
            "unit": "ns",
            "range": "± 1725.3144337356864"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cfd938b2104134ff6813217bc9fb3a0c4a08b99",
          "message": "Merge pull request #3340 from greymistcube/prepare/3.1.1\n\n🔧 Prepare 3.1.1",
          "timestamp": "2023-07-28T10:37:50+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/planetarium/libplanet/commit/1cfd938b2104134ff6813217bc9fb3a0c4a08b99"
        },
        "date": 1690509399596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8571589.25,
            "unit": "ns",
            "range": "± 284822.2493772338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21922246.692307692,
            "unit": "ns",
            "range": "± 907443.7078436312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51770738.705882356,
            "unit": "ns",
            "range": "± 999572.7179537617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105898410.3902439,
            "unit": "ns",
            "range": "± 3816271.973916016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208218306.07142857,
            "unit": "ns",
            "range": "± 2284101.0343270963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69308.12765957447,
            "unit": "ns",
            "range": "± 9155.910458399943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338354.0625,
            "unit": "ns",
            "range": "± 38702.24357995759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322428.6354166667,
            "unit": "ns",
            "range": "± 37540.01441412946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297321.7311827957,
            "unit": "ns",
            "range": "± 18161.840515056374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4186748.3225806453,
            "unit": "ns",
            "range": "± 190332.12769843644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716716.2916666665,
            "unit": "ns",
            "range": "± 94663.47939295702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18370.209677419356,
            "unit": "ns",
            "range": "± 3515.4191833068576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100469.76923076923,
            "unit": "ns",
            "range": "± 16788.796344306473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96780.39690721649,
            "unit": "ns",
            "range": "± 23054.160088024484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103812.96391752578,
            "unit": "ns",
            "range": "± 21922.91513227933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5584.297872340426,
            "unit": "ns",
            "range": "± 1438.1388422794387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16984.733333333334,
            "unit": "ns",
            "range": "± 3162.9312276054625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1719557.4213483145,
            "unit": "ns",
            "range": "± 195374.5492846092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3269975.6785714286,
            "unit": "ns",
            "range": "± 396895.5861632064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248927.095505618,
            "unit": "ns",
            "range": "± 222278.52803560547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7605897.89010989,
            "unit": "ns",
            "range": "± 2011710.4542557886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3721881.824742268,
            "unit": "ns",
            "range": "± 403863.5902848007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3919498.005154639,
            "unit": "ns",
            "range": "± 379625.87181340257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4763936.785714285,
            "unit": "ns",
            "range": "± 375779.2681975038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4381285.9130434785,
            "unit": "ns",
            "range": "± 430247.63501408364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7549417.31443299,
            "unit": "ns",
            "range": "± 535374.0602662646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7191283.348958333,
            "unit": "ns",
            "range": "± 169725.2131414947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069155.6385416666,
            "unit": "ns",
            "range": "± 58573.594810384755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378426.8973214286,
            "unit": "ns",
            "range": "± 23875.56378652488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3268097.080436862,
            "unit": "ns",
            "range": "± 130284.9128994271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887462.1707899305,
            "unit": "ns",
            "range": "± 33504.395360509465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839901.0643404447,
            "unit": "ns",
            "range": "± 22459.16383905602"
          }
        ]
      }
    ]
  }
}